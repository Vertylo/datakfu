import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { WakData } from './entities/wakdata'
import * as WAKFU_DATA from './data.json'

export const data: WakData = WAKFU_DATA as WakData

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
