import { NestFactory } from '@nestjs/core';
import { PolicyModule } from './policy.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.createMicroservice(PolicyModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4001,
    },
  });
  await app.listen().then(() => logger.log('Microservice policy is listening'));
}
bootstrap();
