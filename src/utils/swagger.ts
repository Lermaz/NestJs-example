/* eslint-disable prettier/prettier */
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const addSwagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Task course')
    .setDescription('Curso de Nest.js')
    .setVersion('1.0')
    .addBearerAuth(
      {in: 'header', type: 'http', scheme: 'bearer', bearerFormat: 'JWT'},
      'Bearer'
    )
    .addTag('tasks')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
};
