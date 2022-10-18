import { describe, beforeEach, afterEach, it, expect } from 'vitest';
import fastify from 'fastify';

import cloudinary from './';

describe('fastify-cloudinary', () => {
  beforeEach(async (ctx) => {
    ctx.app = fastify();
  });

  it('register', async (ctx) => {
    ctx.app.register(cloudinary, { url: 'cloudinary://API_KEY:API_SECRET@CLOUD_NAME' });
    await ctx.app.ready();
    expect(ctx.app.cloudinary).toBeDefined();
  });

  afterEach(async (ctx) => {
    ctx.app.close();
  });
});
