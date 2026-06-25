import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/cordoba5579",
        destination: "https://cordoba5579.vercel.app/cordoba5579",
      },
      {
        source: "/cordoba5579/:path*",
        destination: "https://cordoba5579.vercel.app/cordoba5579/:path*",
      },
    ];
  },
};

export default nextConfig;
