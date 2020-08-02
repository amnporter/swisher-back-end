import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  /* Swagger module start */
  const options = new DocumentBuilder()
    .setTitle('Swisher Api')
    .setDescription('Swisher Api Description')
    .setVersion('0.0.1')
    .addTag('swisher')
    .build();
  const swaggerDoc = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, swaggerDoc);
  /* End swagger module */
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
