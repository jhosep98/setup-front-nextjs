const withTM = require('next-transpile-modules')(['@wulperstudio/cms']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
  },
};

module.exports = withTM(nextConfig);
