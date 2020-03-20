import {ApplicationConfig} from '@loopback/core';
import {Lb4DemoApplication} from './application';

export {Lb4DemoApplication};

export async function main(options: ApplicationConfig = {}) {

  options.rest = {
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      maxAge: 55500,
      credentials: true,
      allowedHeaders: ["Content-Type", "authorizationToken", "userId"]
    }
  };
 //   console.log(options);
  const app = new Lb4DemoApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
