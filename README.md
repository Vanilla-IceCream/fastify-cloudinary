# fastify-cloudinary

The Cloudinary Fastify SDK allows you to quickly and easily integrate your application with Cloudinary. Effortlessly optimize and transform your cloud's assets.

## Install

```bash
$ npm i fastify-cloudinary
# or
$ pnpm i fastify-cloudinary
# or
$ yarn add fastify-cloudinary
```

## Usage

```ts
import stream from 'stream';
import util from 'util';
import multipart from '@fastify/multipart';
import cloudinary from 'fastify-cloudinary';

const pipeline = util.promisify(stream.pipeline);

fastify.register(multipart);
fastify.register(cloudinary, { url: 'cloudinary://API_KEY:API_SECRET@CLOUD_NAME' });

fastify.post('/file-uploads', async (req, reply) => {
  const data = await req.file();

  await pipeline(
    data.file,
    fastify.cloudinary.uploader.upload_stream({ public_id: data.fieldname }),
  );

  return { message: 'hi' };
});
```
