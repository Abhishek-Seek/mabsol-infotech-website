import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 static export
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "13.204.68.46", // agar images use kar rahe ho
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
