/** @type {import('next').NextConfig} */
const nextConfig = {
  strictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      "bayut-production.s3.eu-central-1.amazonaws.com",
      "images.unsplash.com",
    ],
  },
  nextConfig,
};
