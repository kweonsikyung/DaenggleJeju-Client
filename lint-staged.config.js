module.exports = {
  'apps/web/**/*.{ts,tsx}': () => 'pnpm --filter web lint:fix',
};
