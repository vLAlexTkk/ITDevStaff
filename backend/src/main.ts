import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.enableCors({
    origin: process.env.FRONTEND_URL,
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    credentials: true,
  });
  await app.listen(4000);
}
bootstrap();
