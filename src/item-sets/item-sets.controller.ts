import { Controller, Get, Param } from '@nestjs/common'
import { ItemSetsService } from './item-sets.service'

@Controller('item-sets')
export class ItemSetsController {
  constructor(private readonly itemSetsService: ItemSetsService) {}

  @Get()
  findAll() {
    return this.itemSetsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemSetsService.findOne(+id)
  }
}
