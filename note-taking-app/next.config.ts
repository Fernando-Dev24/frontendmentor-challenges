import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
