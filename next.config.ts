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
      {
        source: "/Administracion_MTAlvear963",
        destination: "https://auditoria-administracion-mt-alvear9-two.vercel.app/",
      },
      {
        source: "/Administracion_MTAlvear963/:path*",
        destination: "https://auditoria-administracion-mt-alvear9-two.vercel.app/:path*",
      },
      {
        source: "/alvear963",
        destination: "https://auditoria-administracion-mt-alvear9-two.vercel.app/",
      },
      {
        source: "/alvear963/:path*",
        destination: "https://auditoria-administracion-mt-alvear9-two.vercel.app/:path*",
      },
      {
        source: "/mdq-911-intelligence",
        destination: "https://mdq-911-intelligence.vercel.app/",
      },
      {
        source: "/mdq-911-intelligence/:path*",
        destination: "https://mdq-911-intelligence.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
