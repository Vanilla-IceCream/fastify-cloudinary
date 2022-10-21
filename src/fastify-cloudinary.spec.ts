import { beforeEach, afterEach, test, expect } from 'vitest';
import fastify from 'fastify';

import cloudinary from './fastify-cloudinary';

beforeEach(async (ctx) => {
  ctx.app = fastify();
});

test('fastify-cloudinary', async ({ app }) => {
  app.register(cloudinary, { url: 'cloudinary://API_KEY:API_SECRET@CLOUD_NAME' });
  await app.ready();
  expect(app.cloudinary).toBeDefined();
});

afterEach(async (ctx) => {
  ctx.app.close();
});
