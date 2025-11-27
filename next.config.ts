import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  // dynamic: "force-static",

  reactStrictMode: true,

  images: {
    unoptimized: true, 
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
