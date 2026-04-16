import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit } from './lib/rateLimit';

// CORS configuration
const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://dicotr.com',
  'https://www.dicotr.com',
  process.env.NEXT_PUBLIC_APP_URL,
  process.env.NEXT_PUBLIC_PRODUCTION_URL,
].filter(Boolean);

// For production, allow all origins if no specific origins are configured
// This is useful for initial deployment, but you should configure specific domains for security
const isProduction = process.env.NODE_ENV === 'production';
const allowAllOrigins = isProduction && ALLOWED_ORIGINS.length <= 2; // Only localhost entries

export default function proxy(request: NextRequest) {
  const { pathname, search, searchParams } = request.nextUrl;
  const fullUrl = request.url;
  const method = request.method;
  const userAgent = request.headers.get('user-agent') || 'unknown';
  const referer = request.headers.get('referer') || 'direct';
  
  // Capture page visit information (server-side)
  // Skip API routes, static files, and Next.js internal routes
  if (!pathname.startsWith('/api/') && 
      !pathname.startsWith('/_next/') && 
      !pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp)$/)) {
    
    // Log page visit information
    console.log('📍 Page Visit:', {
      pathname,
      fullUrl,
      search: search || 'none',
      params: Object.fromEntries(searchParams),
      method,
      userAgent: userAgent.substring(0, 50) + '...',
      referer,
      timestamp: new Date().toISOString(),
    });
    
    // TODO: Add your custom logic here
    // Examples:
    // - Store in database
    // - Send to analytics service
    // - Track user behavior
    // - A/B testing logic
    // - Personalization based on URL
    
    // Example: You can add custom headers based on pathname
    // if (pathname === '/special-page') {
    //   response.headers.set('X-Custom-Header', 'special-value');
    // }
  }
  
  // Apply security headers
  const response = NextResponse.next();
  
  // CORS Headers
  const origin = request.headers.get('origin');
  
  // Allow configured origins or all origins in production if not configured
  if (origin) {
    if (allowAllOrigins || ALLOWED_ORIGINS.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Credentials', 'true');
    }
  }
  
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-CSRF-Token'
  );
  
  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200, headers: response.headers });
  }
  
  // Security Headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );
  
  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'self';"
  );
  
  // Rate limiting for API routes
  if (pathname.startsWith('/api/')) {
    const rateLimitResult = rateLimit(request);
    
    if (rateLimitResult.limited) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: 'Too many requests. Please try again later.',
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': rateLimitResult.retryAfter?.toString() || '60',
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.retryAfter?.toString() || '60',
          },
        }
      );
    }
  }
  
  // CSRF protection for POST, PUT, DELETE requests to API routes
  if (
    (request.method === 'POST' ||
      request.method === 'PUT' ||
      request.method === 'DELETE') &&
    pathname.startsWith('/api/')
  ) {
    // Skip CSRF check for contact form (or implement session-based CSRF)
    // In production, you should implement proper CSRF token validation
    const csrfToken = request.headers.get('x-csrf-token');
    
    // For now, we'll just check if the origin is allowed
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: 'Invalid origin',
        }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  }
  
  return response;
}

// Configure which routes should use this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
