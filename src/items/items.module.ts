import { Module } from '@nestjs/common'
import { ItemsService } from './items.service'
import { ItemRaritiesController, ItemsController } from './items.controller'

@Module({
  controllers: [ItemsController, ItemRaritiesController],
  providers: [ItemsService],
})
export class ItemsModule {}
