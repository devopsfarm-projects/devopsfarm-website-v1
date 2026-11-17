import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  company: z.string().trim().min(2, 'Company name is required').max(100, 'Company name is too long'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number is too long')
    .regex(/^[+\d\s()-]+$/, 'Please enter a valid phone number'),
  country: z.string().trim().min(2, 'Country is required').max(60, 'Country is too long'),
  message: z.string().trim().max(1000, 'Message is too long'),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
  // Honeypot: real users never see/fill this. Bots usually do -> validation fails.
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
