import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { WakData } from './entities/wakdata'
import * as WAKFU_DATA from './data.json'

export const data: WakData = WAKFU_DATA as WakData

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('Datakfu')
    .setDescription('A Wakfu API')
    .setVersion('0.1')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('', app, document)
  await app.listen(3000)
}
bootstrap()
