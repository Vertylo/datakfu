import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { ItemSetsService } from './item-sets.service'
import { ItemSet } from 'src/entities/item-set'

@Controller('item-sets')
export class ItemSetsController {
  constructor(private readonly itemSetsService: ItemSetsService) {}

  @Get()
  findAll(): [ItemSet] {
    return this.itemSetsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): ItemSet {
    return this.itemSetsService.findOne(id)
  }
}
