module.exports = {
  "**/*.{ts,tsx,js,jsx}": ["biome check --write --unsafe"],
  "**/*.{json,css,md}": ["biome format --write"],
};
