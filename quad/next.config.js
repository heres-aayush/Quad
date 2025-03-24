/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove or modify custom Webpack config
  webpack: (config) => {
    // Comment this out and test the build
    // config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
