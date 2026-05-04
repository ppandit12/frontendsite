import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { fetchContent } from '@/lib/api';

export function useContent<T = any>(slug: string, fallback?: T) {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['content', slug],
    queryFn: () => fetchContent(slug),
    staleTime: 30 * 1000, // 30 seconds
    retry: 1,
    refetchOnWindowFocus: false,
  });

  // We use stale-while-revalidate via React Query.
  // Polling or refetching on window focus can be configured here if desired.

  // Return the content field from the API response, or the fallback
  const content = data?.content ?? fallback ?? null;

  return {
    content: content as T,
    isLoading,
    error,
    raw: data,
  };
}
