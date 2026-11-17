'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Send } from 'lucide-react';
import { Button } from '@/components/common/button.component';
import { contactFormSchema, type ContactFormData } from '@/schemas/contactForm.schema';
import { contactService } from '@/services';

const inputClass =
  'w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-white placeholder-gray-500 hover:border-navy-600';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      message: '',
      acceptTerms: false,
      website: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus(null);
    try {
      const res = await contactService.submitContactForm(data);
      setStatus({ type: 'success', text: res.message });
      reset();
    } catch (err) {
      const text =
        axios.isAxiosError(err) && err.response?.data?.message
          ? err.response.data.message
          : 'Something went wrong. Please try again.';
      setStatus({ type: 'error', text });
    }
  };

  const Error = ({ msg }: { msg?: string }) =>
    msg ? <p className="text-red-400 text-xs mt-1">{msg}</p> : null;

  return (
    <div className="bg-navy-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden bg-black">
      <h2 className="text-3xl font-bold mb-2">How can we help?</h2>
      <p className="text-gray-400 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Honeypot - hidden from real users */}
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register('website')} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Name*</label>
            <input type="text" className={inputClass} placeholder="John Doe" {...register('name')} />
            <Error msg={errors.name?.message} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Company*</label>
            <input type="text" className={inputClass} placeholder="Acme Inc." {...register('company')} />
            <Error msg={errors.company?.message} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email*</label>
            <input type="email" className={inputClass} placeholder="john@company.com" {...register('email')} />
            <Error msg={errors.email?.message} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Phone*</label>
            <input type="tel" className={inputClass} placeholder="+91 98765 43210" {...register('phone')} />
            <Error msg={errors.phone?.message} />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Country*</label>
          <input type="text" className={inputClass} placeholder="India" {...register('country')} />
          <Error msg={errors.country?.message} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Message</label>
          <textarea rows={4} className={inputClass} placeholder="Tell us about your project or challenge..." {...register('message')} />
          <Error msg={errors.message?.message} />
        </div>

        <div>
          <div className="flex items-start gap-3">
            <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-gray-600 bg-navy-800 text-brand" {...register('acceptTerms')} />
            <label htmlFor="terms" className="text-sm text-gray-400">
              I agree to the <a href="/terms-conditions" className="text-brand hover:text-brand-light underline">Terms and Conditions</a> and{' '}
              <a href="/privacy-policy" className="text-brand hover:text-brand-light underline">Privacy Policy</a>.
            </label>
          </div>
          <Error msg={errors.acceptTerms?.message} />
        </div>

        {status && (
          <div
            role="status"
            className={`rounded-lg px-4 py-3 text-sm ${
              status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
            }`}
          >
            {status.text}
          </div>
        )}

        <Button type="submit" fullWidth size="lg" disabled={isSubmitting} className="bg-violet hover:bg-brand-dark text-white font-bold py-4 text-lg shadow-lg shadow-brand/25">
          {isSubmitting ? 'Submitting...' : 'Submit'}
          <Send className="ml-2 w-5 h-5" />
        </Button>
      </form>
    </div>
  );
};
