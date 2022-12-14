import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { UserService } from "./user/user.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, new DocumentBuilder()
    .setTitle('Item API')
    .setDescription('My Item API')
    .build());

  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
