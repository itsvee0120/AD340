// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for React Native
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // Enable validation pipes
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
  console.log('Backend running on http://localhost:3000');
}
bootstrap();
