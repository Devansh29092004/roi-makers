import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⚠️ This will allow the production build to succeed even with lint errors
    ignoreDuringBuilds: true,
  },
  // Suppress hydration warnings caused by browser extensions
  reactStrictMode: false,
};

export default nextConfig;
