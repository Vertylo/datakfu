import { Module } from '@nestjs/common'
import { ItemRaritiesService } from './item-rarities.service'
import { ItemRaritiesController } from './item-rarities.controller'

@Module({
  controllers: [ItemRaritiesController],
  providers: [ItemRaritiesService],
})
export class ItemRaritiesModule {}
