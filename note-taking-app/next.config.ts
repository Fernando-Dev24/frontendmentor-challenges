import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
};

export default nextConfig;
