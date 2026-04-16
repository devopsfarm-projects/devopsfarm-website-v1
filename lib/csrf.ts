import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// CSRF Token storage (in production, use Redis or session store)
const csrfTokens = new Map<string, { token: string; expiresAt: number }>();

// Generate CSRF token
export function generateCsrfToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

// Create CSRF token for session
export function createCsrfToken(sessionId: string): string {
  const token = generateCsrfToken();
  const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  
  csrfTokens.set(sessionId, { token, expiresAt });
  
  // Cleanup expired tokens
  for (const [id, data] of csrfTokens.entries()) {
    if (Date.now() > data.expiresAt) {
      csrfTokens.delete(id);
    }
  }
  
  return token;
}

// Verify CSRF token
export function verifyCsrfToken(sessionId: string, token: string): boolean {
  const stored = csrfTokens.get(sessionId);
  
  if (!stored) {
    return false;
  }
  
  if (Date.now() > stored.expiresAt) {
    csrfTokens.delete(sessionId);
    return false;
  }
  
  return stored.token === token;
}

// Middleware helper
export function validateCsrfToken(req: NextRequest): boolean {
  const sessionId = req.cookies.get('session')?.value;
  const csrfToken = req.headers.get('x-csrf-token');
  
  if (!sessionId || !csrfToken) {
    return false;
  }
  
  return verifyCsrfToken(sessionId, csrfToken);
}
