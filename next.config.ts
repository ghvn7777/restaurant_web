import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Use unoptimized to bypass private IP resolution issue
    // (occurs when Pexels CDN resolves to private IPs via VPN/corporate network)
    unoptimized: true,
  },
};

export default nextConfig;
