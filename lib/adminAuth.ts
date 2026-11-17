import crypto from 'crypto';
import { NextRequest } from 'next/server';

// Simple admin login: one password (ADMIN_PASSWORD env) -> signed, expiring cookie.
export const ADMIN_COOKIE = 'admin_session';
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

function sign(payload: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(payload).digest('hex');
}

export function checkPassword(input: string): boolean {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw || !input) return false;
  const a = crypto.createHash('sha256').update(input).digest();
  const b = crypto.createHash('sha256').update(pw).digest();
  return crypto.timingSafeEqual(a, b);
}

export function createSessionToken(): string {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) throw new Error('ADMIN_PASSWORD is not set');
  const payload = String(Date.now() + MAX_AGE_SECONDS * 1000);
  return `${payload}.${sign(payload, pw)}`;
}

export function isAdmin(request: NextRequest): boolean {
  const pw = process.env.ADMIN_PASSWORD;
  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  if (!pw || !token) return false;

  const [payload, sig] = token.split('.');
  if (!payload || !sig) return false;

  const expected = sign(payload, pw);
  if (sig.length !== expected.length) return false;
  const valid = crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  return valid && Number(payload) > Date.now();
}

export const adminCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
  maxAge: MAX_AGE_SECONDS,
};
