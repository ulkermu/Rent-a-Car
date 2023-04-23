/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["tr", "en", "de"],
    defaultLocale: "tr",
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: "/hakkimizda",
        destination: "/about",
      },
      {
        source: "/about",
        destination: "/about",
      },
      {
        source: "/ueber-uns",
        destination: "/about",
      },
    ];
  },
};

module.exports = nextConfig;
