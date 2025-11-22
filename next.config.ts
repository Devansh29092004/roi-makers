import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⚠️ This will allow the production build to succeed even with lint errors
    ignoreDuringBuilds: true,
  },
  // Suppress hydration warnings caused by browser extensions
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;

