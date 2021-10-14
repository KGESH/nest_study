import { Logger } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig: any = config.get('db');
const envLog: any = [
  process.env.DOCKER_TYPE,
  process.env.DOCKER_HOST,
  process.env.DOCKER_PORT,
  process.env.DOCKER_USERNAME,
  process.env.DOCKER_PASSWORD,
  process.env.DOCKER_DATABASE,
];
Logger.log(envLog);
Logger.log(dbConfig);
export const typeORMConfig: TypeOrmModuleOptions = {
  type: process.env.DOCKER_TYPE || dbConfig.type,
  host: process.env.DOCKER_HOST || dbConfig.host,
  port: process.env.DOCKER_PORT || dbConfig.port,
  username: process.env.DOCKER_USERNAME || dbConfig.username,
  password: process.env.DOCKER_PASSWORD || dbConfig.password,
  database: process.env.DOCKER_DATABASE || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  synchronize: process.env.DOCKER_SYNCHRONIZE || dbConfig.synchronize,
};
