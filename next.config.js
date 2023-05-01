/** @type {import('next').NextConfig} */
const nextConfig = {
  //pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  reactStrictMode: false,
  i18n: {
    locales: ["tr", "en", "de"],
    defaultLocale: "tr",
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: "/(hakkimizda|en/about|de/ueber-uns)",
        destination: "/hakkimizda",
      },
      {
        source: "/(arac-kirala|en/rent-a-car|de/ein-auto-mieten)",
        destination: "/arac-kirala",
      },
    ];
  },
};

module.exports = nextConfig;
