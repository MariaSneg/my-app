import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/my-app/' : '',
  basePath: isProd ? '/my-app' : '',
  output: 'export'
};

export default nextConfig;
