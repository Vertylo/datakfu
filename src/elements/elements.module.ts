import { Module } from '@nestjs/common'
import { ElementsService } from './elements.service'
import { ElementsController } from './elements.controller'

@Module({
  controllers: [ElementsController],
  providers: [ElementsService],
})
export class ElementsModule {}
