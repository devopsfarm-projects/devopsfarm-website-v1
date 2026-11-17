import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, adminCookieOptions, checkPassword, createSessionToken } from '@/lib/adminAuth';

// Max 5 login attempts per minute per IP
const attempts = new Map<string, { count: number; resetTime: number }>();

export async function POST(request: NextRequest) {
  const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  const now = Date.now();
  let entry = attempts.get(ip);
  if (!entry || now > entry.resetTime) {
    entry = { count: 0, resetTime: now + 60_000 };
    attempts.set(ip, entry);
  }
  entry.count++;
  if (entry.count > 5) {
    return NextResponse.json({ success: false, message: 'Too many attempts. Try again in a minute.' }, { status: 429 });
  }

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ success: false, message: 'Admin login is not configured.' }, { status: 500 });
  }

  const body = await request.json().catch(() => ({}));
  if (!checkPassword(String(body?.password ?? ''))) {
    return NextResponse.json({ success: false, message: 'Wrong password.' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE, createSessionToken(), adminCookieOptions);
  return response;
}
