'use client';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useState } from 'react';
import { defaultQueryOptions } from '@/lib/react-query';

export default function TanstackQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          ...defaultQueryOptions,
        },
      }),
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
