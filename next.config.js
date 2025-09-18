const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tong.visitkorea.or.kr", "i.ytimg.com", "img1.kakaocdn.net"],
  },
};

module.exports = withVanillaExtract(nextConfig);
