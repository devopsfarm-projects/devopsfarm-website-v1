# API Services

This folder contains all API service modules for making HTTP requests.

## Structure

- `contact.service.ts` - Contact form related API calls
- `index.ts` - Central export file for all services

## Usage

```typescript
import { contactService } from '@/services';

// Submit contact form
const response = await contactService.submitContactForm(formData);
```

## Adding New Services

1. Create a new service file (e.g., `auth.service.ts`)
2. Define your API methods
3. Export from `index.ts`

Example:

```typescript
// auth.service.ts
import apiClient from '@/lib/axios';

export const authService = {
  login: async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  },
};
```
