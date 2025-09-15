import type { DefaultOptions } from '@tanstack/react-query';

export const defaultQueryOptions = {
  queries: {
    retry: false,
    staleTime: 60_000, // 60 seconds(1 min)
    gcTime: 300_000, // 300 seconds(5 mins)
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: true,
  },
} satisfies DefaultOptions;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<ReturnType<T>, 'queryKey' | 'queryFn'>;
