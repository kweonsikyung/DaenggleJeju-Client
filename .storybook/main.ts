// .storybook/main.ts
import type { StorybookConfig } from "@storybook/nextjs-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/ui/**/*.stories.@(ts|tsx|mdx)",
    "../src/ui/views/Sample/**/*.stories.@(ts|tsx|mdx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = [...(config.plugins ?? []), vanillaExtractPlugin()];
    config.resolve = {
      ...(config.resolve ?? {}),
      alias: {
        ...(config.resolve?.alias ?? {}),
        "@": path.resolve(__dirname, "../src"),
      },
    };
    return config;
  },

  staticDirs: ["../public"],
};

export default config;
