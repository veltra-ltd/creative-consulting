import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http://localhost:3000',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['images.pexels.com', "unpkg.com", "https://images.pexels.com", "https://images.weserv.nl"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm': 'three/examples/jsm',
    };
    return config;
  },
};

export default nextConfig;


