import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import stream from 'stream';
import util from 'util';
import { Type } from '@sinclair/typebox';

const pipeline = util.promisify(stream.pipeline);

export default (async (app) => {
  // $ node client.mjs
  app.post(
    '',
    {
      schema: {
        response: {
          200: Type.Object({
            message: Type.String(),
            url: Type.Optional(Type.String()),
          }),
        },
      },
    },
    async (req, reply) => {
      const data = await req.file();

      if (!data) return reply.code(400).send({ message: 'Bad Request' });

      await pipeline(
        data.file,
        app.cloudinary.uploader.upload_stream({ public_id: data.fieldname }),
      );

      return reply.send({ message: 'OK', url: app.cloudinary.url(data.fieldname) });
    },
  );
}) as FastifyPluginAsyncTypebox;
