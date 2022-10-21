import type { ConfigOptions } from 'cloudinary';
import type { v2 as Cloudinary } from 'cloudinary';
declare type FastifyCloudinaryOptions = {
    url?: string;
} & ConfigOptions;
declare module 'fastify' {
    interface FastifyInstance {
        cloudinary: typeof Cloudinary;
    }
}
declare const _default: import("fastify").FastifyPluginAsync<FastifyCloudinaryOptions, import("fastify").RawServerDefault, import("fastify").FastifyTypeProviderDefault>;
export default _default;
