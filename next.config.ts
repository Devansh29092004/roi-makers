import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

