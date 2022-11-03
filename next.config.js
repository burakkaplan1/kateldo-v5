/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: [
      "cloud.funda.nl",
      "istockphoto.com",
      "firebasestorage.googleapis.com",
      "media.istockphoto.com",
    ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
