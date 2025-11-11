import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // recommended       // use the faster SWC compiler
  experimental: {
    // you can keep other experimental features if needed
  },
};

export default nextConfig;
