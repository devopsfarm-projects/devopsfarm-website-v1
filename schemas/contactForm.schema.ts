import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50, 'First name is too long'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50, 'Last name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^[+\d\s()-]+$/, 'Please enter a valid phone number'),
  description: z.enum(['Individual', 'Industrialist', 'Business owner', 'Shopkeeper', 'Corporate', 'Other'], {
    message: 'Please select an option'
  }),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions'
  })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
