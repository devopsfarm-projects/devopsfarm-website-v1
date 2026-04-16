// API client for fetching dynamic content from backend
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

interface RequestOptions {
  params?: Record<string, string>;
  headers?: Record<string, string>;
}

export class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string = API_BASE_URL) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
      withCredentials: true, // Include cookies for session management
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        if (error.response) {
          console.error('API Error:', error.response.data);
          throw new Error(error.response.data.message || error.response.statusText);
        } else if (error.request) {
          console.error('Network Error:', error.message);
          throw new Error('Network error. Please check your connection.');
        } else {
          console.error('Error:', error.message);
          throw new Error(error.message);
        }
      }
    );
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const config: AxiosRequestConfig = {
      url: endpoint,
      params: options.params,
      headers: options.headers,
    };

    return this.axiosInstance.request<T>(config) as Promise<T>;
  }

  // Page content endpoints
  async getPageContent(pathname: string, userId?: string) {
    return this.request(`/content/page`, {
      params: { pathname, ...(userId && { userId }) },
    });
  }

  // User-specific content
  async getUserContent(userId: string) {
    return this.request(`/content/user/${userId}`);
  }

  // Home page data
  async getHomeData(userId?: string) {
    return this.request('/content/home', {
      params: userId ? { userId } : {},
    });
  }

  // About page data
  async getAboutData(userId?: string) {
    return this.request('/content/about-us', {
      params: userId ? { userId } : {},
    });
  }

  // Services data
  async getServicesData(userId?: string) {
    return this.request('/content/services', {
      params: userId ? { userId } : {},
    });
  }

  // Portfolio/case studies
  async getPortfolioData(userId?: string) {
    return this.request('/content/portfolio', {
      params: userId ? { userId } : {},
    });
  }

  // Team data
  async getTeamData(userId?: string) {
    return this.request('/content/team', {
      params: userId ? { userId } : {},
    });
  }

  // FAQ data
  async getFAQData(userId?: string) {
    return this.request('/content/faq', {
      params: userId ? { userId } : {},
    });
  }

  // Generic content fetcher
  async getContent(contentType: string, userId?: string) {
    return this.request(`/content/${contentType}`, {
      params: userId ? { userId } : {},
    });
  }
}

// Singleton instance
export const apiClient = new ApiClient();

// Server-side fetch helper (for use in Server Components)
export async function fetchPageData(pathname: string, userId?: string) {
  try {
    const data = await apiClient.getPageContent(pathname, userId);
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching page data:', error);
    return { data: null, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
