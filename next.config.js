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
      // {
      //   source: "/hakkimizda",
      //   destination: "/hakkimizda",
      // },
      {
        source: "/about",
        destination: "/hakkimizda",
      },
      {
        source: "/ueber-uns",
        destination: "/hakkimizda",
      },
      // {
      //   source: "/arac-kirala",
      //   destination: "/arac-kirala",
      // },
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
