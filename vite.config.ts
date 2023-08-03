import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/fastify-cloudinary.ts'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['url', ...Object.keys(pkg.dependencies)],
    },
  },
  plugins: [
    dts({
      exclude: ['**/__tests__/**'],
    }),
  ],
});
