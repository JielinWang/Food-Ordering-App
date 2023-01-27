/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    allowFutureImage: true,
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
