const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
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
