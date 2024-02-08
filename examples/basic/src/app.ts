import fastify from 'fastify';
import multipart from '@fastify/multipart';
import cloudinary from 'fastify-cloudinary';

import router from '~/plugins/router';

export default () => {
  const app = fastify({
    logger: {
      transport: {
        target: '@fastify/one-line-logger',
      },
    },
  });

  app.register(multipart);
  app.register(cloudinary, { url: 'cloudinary://API_KEY:API_SECRET@CLOUD_NAME' });

  app.register(router);

  return app;
};
