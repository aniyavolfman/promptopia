/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
  headers: [
    {
      key: "Cache-Control",
      value: "private, no-cache, no-store, max-age=0, must-revalidate",
    },
  ],
};

module.exports = nextConfig;
