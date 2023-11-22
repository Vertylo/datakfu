import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { ItemsService } from './items.service'
import { Item } from 'src/entities/item'

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): [Item] {
    return this.itemsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Item {
    return this.itemsService.findOne(id)
  }
}
