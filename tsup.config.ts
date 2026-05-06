import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/ui/index.ts'],
  outDir: 'dist/ui',
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom', 'next', '@vanilla-extract/css'],
  tsconfig: 'tsconfig.ui.json',
});