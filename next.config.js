/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io']
  }
};

const withPWA = require("@imbios/next-pwa")({
  dest: "public",
});

module.exports = withPWA(nextConfig);
