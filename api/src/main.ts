import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(json({ limit: '0.45mb' }));
  app.use(urlencoded({ extended: true, limit: '0.45mb' }));
  await app.listen(3000);
}
bootstrap();
