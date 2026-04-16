import { NextRequest } from 'next/server';

// Rate limiting store (in production, use Redis or a database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_CONFIG = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 10, // Max 10 requests per minute per IP
};

export function rateLimit(req: NextRequest): { limited: boolean; retryAfter?: number } {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  const now = Date.now();
  
  // Get or create rate limit entry
  let entry = rateLimitStore.get(ip);
  
  // Reset if window has passed
  if (!entry || now > entry.resetTime) {
    entry = {
      count: 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
    };
    rateLimitStore.set(ip, entry);
    return { limited: false };
  }
  
  // Increment count
  entry.count++;
  
  // Check if limit exceeded
  if (entry.count > RATE_LIMIT_CONFIG.maxRequests) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    return { limited: true, retryAfter };
  }
  
  return { limited: false };
}

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, 60000); // Clean up every minute
