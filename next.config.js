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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // 모든 https 호스트 허용
      },
      {
        protocol: "http",
        hostname: "**", // 모든 http 호스트 허용 (보안상 덜 권장됨)
      },
    ],
    // domains: [
    //   "tong.visitkorea.or.kr",
    //   "i.ytimg.com",
    //   "img1.kakaocdn.net",
    //   "kareumstay.com",
    //   "api.cdn.visitjeju.net",
    //   "cdn.visitkorea.or.kr",
    //   "lh3.googleusercontent.com",
    //   "storage.doopedia.co.kr",
    //   "googleusercontent.com",
    //   "yaimg.yanolja.com",
    //   "peton.me",
    //   "mblogthumb-phinf.pstatic.net",
    //   "a0.muscache.com",
    //   "t1.daumcdn.net",
    //   "t1.kakaocdn.net",
    //   "postfiles.pstatic.net",
    //   "d12zq4w4guyljn.cloudfront.net",
    // ],
  },
};

module.exports = withVanillaExtract(nextConfig);
