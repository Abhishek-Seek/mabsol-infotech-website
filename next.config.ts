import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // PM2/Nginx ke liye best
  reactStrictMode: true,
  swcMinify: true,

  // Agar aapko future mein images ya API ke liye external domains allow karne ho
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "13.204.68.46",
      },
    ],
  },

  // Agar aapke project me TypeScript/ESLint errors ignore karne hon to
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
