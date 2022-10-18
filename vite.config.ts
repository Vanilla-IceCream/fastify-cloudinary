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
      external: ['url', 'fastify-plugin', 'cloudinary'],
      output: {
        globals: {
          url: 'url',
          'fastify-plugin': 'FastifyPlugin',
          cloudinary: 'Cloudinary',
        },
      },
    },
  },
  plugins: [dts({ insertTypesEntry: true })],
});
