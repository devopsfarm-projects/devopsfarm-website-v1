// Security configuration for the application

export const SECURITY_CONFIG = {
  // Rate Limiting
  rateLimit: {
    api: {
      windowMs: 60 * 1000, // 1 minute
      maxRequests: 10, // Max 10 requests per minute
    },
    contact: {
      windowMs: 60 * 1000, // 1 minute
      maxRequests: 3, // Max 3 contact form submissions per minute
    },
  },

  // CORS
  cors: {
    allowedOrigins: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://dicotr.com',
      'https://www.dicotr.com',
      process.env.NEXT_PUBLIC_APP_URL,
      process.env.NEXT_PUBLIC_PRODUCTION_URL,
    ].filter(Boolean),
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
    credentials: true,
  },

  // Content Security Policy
  csp: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'https:', 'https://images.unsplash.com'],
      fontSrc: ["'self'", 'data:'],
      connectSrc: ["'self'", 'https:'],
      frameAncestors: ["'self'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  },

  // CSRF
  csrf: {
    tokenLength: 32,
    tokenExpiry: 24 * 60 * 60 * 1000, // 24 hours
  },

  // Session
  session: {
    cookieName: 'session',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict' as const,
  },

  // Password requirements (for future auth implementation)
  password: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
  },
};

// Helper to generate CSP header string
export function generateCSPHeader(): string {
  const directives = SECURITY_CONFIG.csp.directives;
  return Object.entries(directives)
    .map(([key, values]) => {
      const directive = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      return `${directive} ${values.join(' ')}`;
    })
    .join('; ');
}
