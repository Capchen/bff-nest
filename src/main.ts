import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyValidationPipe } from './common/pipe/MyValidationPipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new MyValidationPipe());
  await app.listen(3000);
}
bootstrap();
