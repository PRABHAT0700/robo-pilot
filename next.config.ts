import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/services/ai-automation", destination: "/services/ai-agent-building", permanent: true },
      { source: "/services/custom-software", destination: "/services/ai-consulting", permanent: true },
      { source: "/services/web-mobile", destination: "/services/mobile-app-development", permanent: true },
      { source: "/services/cloud-devops", destination: "/services/ml-model-development", permanent: true },
      { source: "/services/erp-integration", destination: "/services/ai-agent-building", permanent: true },
      { source: "/services/data-consulting", destination: "/services/ml-model-development", permanent: true },
    ];
  },
};

export default nextConfig;
