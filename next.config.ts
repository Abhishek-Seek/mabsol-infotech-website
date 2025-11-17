import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // ✅ static export
  // dynamic: "force-static", // revalidate not configured error

  reactStrictMode: true,

  images: {
    unoptimized: true, // ✅ static export ke liye
    remotePatterns: [
      {
        protocol: "https",
        hostname: "13.204.68.46", // agar external images use kar rahe ho
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
