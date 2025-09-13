'use client';
import { useEffect } from 'react';

export const MSWComponent = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      // eslint-disable-next-line ts/no-require-imports
      require('../../../mocks');
    }
  }, []);

  return null;
};

// https://github.com/mswjs/msw/issues/1644#issuecomment-1615408284
