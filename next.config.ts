import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/apps/001-dynamic-pricing/:path*",
        destination: "https://100apps-001-dynamic-pricing.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
