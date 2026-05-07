module.exports = {
  'apps/web/**/*.{ts,tsx,js,jsx}': [
    'prettier --write',
    () => 'pnpm --filter web lint:fix',
  ],
  '*.{json,css,md}': ['prettier --write'],
};
