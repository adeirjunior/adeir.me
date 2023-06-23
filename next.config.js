/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

const withPWA = require("@imbios/next-pwa")({
  dest: "public",
});

module.exports = withNextIntl(nextConfig);
