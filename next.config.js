/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
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
      {
        source: "/arac-kirala",
        destination: "/arac-kirala",
      },
      {
        source: "/rent-a-car",
        destination: "/arac-kirala",
      },
      {
        source: "/rent-a-car",
        destination: "/arac-kirala",
      },
      {
        source: "/ein-auto-mieten",
        destination: "/arac-kirala",
      },
    ];
  },
};

module.exports = nextConfig;
