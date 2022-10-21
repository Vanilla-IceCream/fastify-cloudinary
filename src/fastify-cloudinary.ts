import type { ConfigOptions } from 'cloudinary';
import type { v2 as Cloudinary } from 'cloudinary';
import { urlToHttpOptions } from 'url';
import plugin from 'fastify-plugin';
import { v2 as cloudinary } from 'cloudinary';

type FastifyCloudinaryOptions = { url?: string } & ConfigOptions;

declare module 'fastify' {
  interface FastifyInstance {
    cloudinary: typeof Cloudinary;
  }
}

export default plugin<FastifyCloudinaryOptions>(
  async (instance, options) => {
    const parseCloudinaryUrl = (url: string = '') => {
      const parsed = urlToHttpOptions(new URL(url));

      return {
        cloud_name: parsed.hostname || undefined,
        api_key: parsed.auth?.split(':')[0],
        api_secret: parsed.auth?.split(':')[1],
        ...options,
      };
    };

    cloudinary.config(parseCloudinaryUrl(options.url));

    instance.decorate('cloudinary', cloudinary);

    return;
  },
  {
    fastify: '4.x',
    name: 'fastify-cloudinary',
  },
);
