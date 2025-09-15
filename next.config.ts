import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['.'],
  },
  images: {
    domains: ['picsum.photos'],
  },
  /* config options here */
};

export default nextConfig;
