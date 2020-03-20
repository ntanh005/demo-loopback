import {Lb4DemoApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {Lb4DemoApplication};

export async function main(options: ApplicationConfig = {
  rest: {
      cors: {
          origin: '*',
          methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
          preflightContinue: false,
          optionsSuccessStatus: 200,
          maxAge: 86400,
          credentials: true,
          allowedHeaders : ["Content-Type", "authorizationToken", "userId"]
      },
    },
}) {
  const app = new Lb4DemoApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
