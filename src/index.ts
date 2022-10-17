import type { ConfigOptions } from 'cloudinary';
import plugin from 'fastify-plugin';
import { v2 as cloudinary } from 'cloudinary';

interface Options extends Omit<ConfigOptions, 'cloud_name' | 'api_key' | 'api_secret'> {
  url: string;
}

export default plugin(
  async (instance, options: Options) => {
    if (!options.url) throw Error('`url` parameter is mandatory');

    const parseCloudinaryUrl = (str: string) => {
      const parsed = new URL(str);

      const omit = <T, U extends keyof T>(obj: T, keys: U[]): Omit<T, U> =>
        (Object.keys(obj) as U[]).reduce(
          (acc, curr) => (keys.includes(curr) ? acc : { ...acc, [curr]: obj[curr] }),
          {} as Omit<T, U>,
        );

      return {
        cloud_name: parsed.host,
        api_key: parsed.auth?.split(':')[0],
        api_secret: parsed.auth?.split(':')[1],
        ...omit(options, ['url']),
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
