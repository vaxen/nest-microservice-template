import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.enableCors();
  console.info(`App is running at port ${port}`);

  await app.listen(process.env.PORT || port);
}
bootstrap();
