import { Module } from '@nestjs/common'
import { ItemSetsService } from './item-sets.service'
import { ItemSetsController } from './item-sets.controller'

@Module({
  controllers: [ItemSetsController],
  providers: [ItemSetsService],
})
export class ItemSetsModule {}
