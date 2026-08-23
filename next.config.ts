import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
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
        source: "/sarmiento-360",
        destination: "https://sarmiento-360.vercel.app/",
      },
      {
        source: "/sarmiento-360/:path*",
        destination: "https://sarmiento-360.vercel.app/:path*",
      },
      {
        source: "/sarmiento360",
        destination: "https://sarmiento-360.vercel.app/",
      },
      {
        source: "/sarmiento360/:path*",
        destination: "https://sarmiento-360.vercel.app/:path*",
      },
      {
        source: "/sarmiento-151",
        destination: "https://sarmiento-151.vercel.app/",
      },
      {
        source: "/sarmiento-151/:path*",
        destination: "https://sarmiento-151.vercel.app/:path*",
      },
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
        destination: "https://mdq-911-intelligence.vercel.app/mdq-911-intelligence",
      },
      {
        source: "/mdq-911-intelligence/:path*",
        destination: "https://mdq-911-intelligence.vercel.app/mdq-911-intelligence/:path*",
      },
      // Hypertrophy Tracker Subpath Reverse Proxy to live production endpoint
      {
        source: "/hypertrophyracker",
        destination: "https://hypertrophyracker.alexismartyniuk.com.ar/",
      },
      {
        source: "/hypertrophyracker/:path*",
        destination: "https://hypertrophyracker.alexismartyniuk.com.ar/:path*",
      },
      {
        source: "/hypertrophy-tracker",
        destination: "https://hypertrophyracker.alexismartyniuk.com.ar/",
      },
      {
        source: "/hypertrophy-tracker/:path*",
        destination: "https://hypertrophyracker.alexismartyniuk.com.ar/:path*",
      },
      {
        source: "/assets/:path*",
        destination: "https://hypertrophyracker.alexismartyniuk.com.ar/assets/:path*",
      },
      {
        source: "/sw.js",
        destination: "https://hypertrophyracker.alexismartyniuk.com.ar/sw.js",
      },
      {
        source: "/registerSW.js",
        destination: "https://hypertrophyracker.alexismartyniuk.com.ar/registerSW.js",
      },
      {
        source: "/manifest.webmanifest",
        destination: "https://hypertrophyracker.alexismartyniuk.com.ar/manifest.webmanifest",
      },
    ];
  },
};

export default nextConfig;
