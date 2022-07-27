import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: ['http://localhost:4200'],
    credentials: true,
    methods: "GET,PUT,PATCH,POST,DELETE,UPDATE,OPTIONS"
  });

  await app.listen(3000);
}
bootstrap();
