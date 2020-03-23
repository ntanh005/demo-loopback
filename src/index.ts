import {ApplicationConfig} from '@loopback/core';
import {Lb4DemoApplication} from './application';

export {Lb4DemoApplication};

export async function main( ) {

  const options = {
    rest = {
       cors: {
          allowedHeaders: 'Content-Type,authorizationToken,userId'
       }
    }
  };
  
  
  const app = new Lb4DemoApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
