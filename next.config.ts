import type { NextConfig } from "next";

// @ts-expect-error — disable type check for the turbo flag (valid runtime option)
const nextConfig: NextConfig = {
  experimental: {
    // explicitly tell Next.js not to use Turbopack
    turbo: false,
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig