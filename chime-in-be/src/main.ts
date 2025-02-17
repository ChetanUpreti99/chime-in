import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  console.log('here1')
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  // this helps to log the request and response details
  //app.useLogger(app.get(Logger));
  // 🚨 TODO: Remove this when deploying to production. This is to allow CORS for all origins. Since proxy is not working in the development environment for react ui
  // app.enableCors({
  //   origin: '*',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204,
  // });
  //const configService = app.get(ConfigService);
  //console.log(`here`,configService.getOrThrow('PORT'));
  console.log('here2')
  await app.listen(3001);
}
bootstrap();
