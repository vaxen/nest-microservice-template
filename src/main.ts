import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.enableCors();
  console.info(`App is running at port ${process.env.PORT || config.get("port")}`);
  console.info(`NODE_ENV is ${process.env.NODE_ENV}`);
  console.info(`Config loaded is ${config.get("env")}`);
  await app.listen(process.env.PORT || config.get("port"));
}
bootstrap();
