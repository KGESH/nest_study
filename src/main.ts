import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

const serverConfig: any = config.get('server');
const port = process.env.DOCKER_SERVER_PORT || serverConfig.port;
Logger.log(`App starting docker port ${process.env.DOCKER_SERVER_PORT}`);
console.log(`App starting config port ${serverConfig.port}`);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`App running port ${port}`);
}
bootstrap();
