import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/fastify-cloudinary.ts'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['url', 'fastify-plugin', 'cloudinary'],
    },
  },
  plugins: [dts()],
});
