import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'FastifyCloudinary',
      fileName: 'fastify-cloudinary',
    },
    rollupOptions: {
      external: ['cloudinary', 'fastify-plugin'],
      output: {
        globals: {
          cloudinary: 'Cloudinary',
          'fastify-plugin': 'FastifyPlugin',
        },
      },
    },
  },
  plugins: [dts({ insertTypesEntry: true })],
});
