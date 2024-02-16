# fastify-cloudinary

Plugin to share a common Cloudinary connection across Fastify.

## Installation

Install `fastify-cloudinary` with your favorite package manager:

```sh
$ npm i fastify-cloudinary
# or
$ yarn add fastify-cloudinary
# or
$ pnpm i fastify-cloudinary
# or
$ bun add fastify-cloudinary
```

## Usage

```js
// esm
import cloudinary from 'fastify-cloudinary';

// cjs
const cloudinary = require('fastify-cloudinary');
```

### Upload stream

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

  return { message: 'OK' };
});
```

See the [examples](./examples) folder for more details.
