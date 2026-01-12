import apiClient from '@/lib/axios';
import type { ContactFormData } from '@/schemas/contactForm.schema';

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const contactService = {
  // Submit contact form
  submitContactForm: async (data: ContactFormData): Promise<ContactResponse> => {
    const response = await apiClient.post('/contact', data);
    return response.data;
  },

  // Subscribe to newsletter (example additional endpoint)
  subscribeNewsletter: async (email: string): Promise<ContactResponse> => {
    const response = await apiClient.post('/newsletter', { email });
    return response.data;
  },

  // Get contact info (example GET endpoint)
  getContactInfo: async (): Promise<ContactResponse> => {
    const response = await apiClient.get('/contact/info');
    return response.data;
  },
};
