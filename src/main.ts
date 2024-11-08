import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // app.enableCors({
  //   origin: 'http://localhost:5173', 
  //   methods: 'GET,POST,PUT,DELETE',
  //   allowedHeaders: 'Content-Type, Authorization', 
  //   credentials: true, 
  // });

  app.enableCors(); 
  
  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
