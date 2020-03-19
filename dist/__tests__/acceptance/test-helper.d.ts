import { Lb4DemoApplication } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Lb4DemoApplication;
    client: Client;
}
