/** @type {import('next').NextConfig} */
const nextConfig = {};

const withPWA = require("@imbios/next-pwa")({
  dest: "public",
});

module.exports = withPWA(nextConfig);
