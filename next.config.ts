import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@dev.icons/react", "@dev.icons/react/mono"],
  },
};

export default nextConfig;
