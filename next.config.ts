import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⚠️ This will allow the production build to succeed even with lint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
