import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/schemas/contactForm.schema';
import { ZodError } from 'zod';

// Simple in-memory rate limiting for contact form
const contactRateLimitStore = new Map<string, { count: number; resetTime: number }>();
const CONTACT_RATE_LIMIT = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 3, // Max 3 submissions per minute
};

function checkContactRateLimit(ip: string): { limited: boolean; retryAfter?: number } {
  const now = Date.now();
  let entry = contactRateLimitStore.get(ip);

  if (!entry || now > entry.resetTime) {
    entry = { count: 1, resetTime: now + CONTACT_RATE_LIMIT.windowMs };
    contactRateLimitStore.set(ip, entry);
    return { limited: false };
  }

  entry.count++;

  if (entry.count > CONTACT_RATE_LIMIT.maxRequests) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    return { limited: true, retryAfter };
  }

  return { limited: false };
}

export async function POST(request: NextRequest) {
  try {
    // Contact form specific rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const rateLimitResult = checkContactRateLimit(ip);

    if (rateLimitResult.limited) {
      return NextResponse.json(
        {
          success: false,
          message: `Too many contact form submissions. Please try again in ${rateLimitResult.retryAfter} seconds.`,
        },
        {
          status: 429,
          headers: {
            'Retry-After': rateLimitResult.retryAfter?.toString() || '60',
          },
        }
      );
    }

    const body = await request.json();

    // Validate request body with Zod
    const validatedData = contactFormSchema.parse(body);

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send to third-party service

    // Example: Log the data (replace with actual logic)
    console.log('Contact form submission:', validatedData);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Replace this with actual email sending or database saving
    // Example with nodemailer or SendGrid:
    // await sendEmail({
    //   to: process.env.ADMIN_EMAIL,
    //   subject: 'New Contact Form Submission',
    //   data: validatedData
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.',
        data: {
          submittedAt: new Date().toISOString(),
          id: Math.random().toString(36).substring(7), // Generate a unique ID
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Handle validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}
