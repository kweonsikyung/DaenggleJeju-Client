const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  basePath: isProd ? "/DaenggleJeju-Client" : "",
  assetPrefix: isProd ? "/DaenggleJeju-Client/" : "",

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /react/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {},
        },
      ],
    });

    return config;
  },
};

module.exports = withVanillaExtract(nextConfig);
