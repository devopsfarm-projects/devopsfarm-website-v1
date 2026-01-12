'use client';

import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api-client';
import { useUser } from '@/contexts/UserContext';

interface PageContentData {
  success?: boolean;
  data?: Record<string, unknown>;
  [key: string]: unknown;
}

export function usePageContent<T = PageContentData>(contentType: string) {
  const { user } = useUser();
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.getContent(contentType, user?.id);
        setData(response as T);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch content');
        console.error('Error fetching content:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [contentType, user?.id]);

  const refetch = async () => {
    try {
      setIsLoading(true);
      const response = await apiClient.getContent(contentType, user?.id);
      setData(response as T);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch content');
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, refetch };
}
