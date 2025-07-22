// next.config.ts

import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 THIS LINE IS REQUIRED
};

module.exports = nextConfig;



// const bundleAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

// // ✅ Final export — wrap your config
// export default bundleAnalyzer(nextConfig);

