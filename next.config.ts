// next.config.ts

import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  // ✅ your custom options here
  // swcMinify is deprecated in newer Next.js, remove it
  // Example: reactStrictMode: true,
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// ✅ Final export — wrap your config
export default bundleAnalyzer(nextConfig);
