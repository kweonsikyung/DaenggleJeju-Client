const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://daengglejeju.site/api/v1/:path*",
      },
    ];
  },
  images: {
    domains: [
      "tong.visitkorea.or.kr",
      "i.ytimg.com",
      "img1.kakaocdn.net",
      "kareumstay.com",
      "api.cdn.visitjeju.net",
      "cdn.visitkorea.or.kr",
      "lh3.googleusercontent.com",
      "storage.doopedia.co.kr",
      "googleusercontent.com",
    ],
  },
};

module.exports = withVanillaExtract(nextConfig);
