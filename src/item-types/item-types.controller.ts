import { Controller, Get } from '@nestjs/common'
import { ItemTypesService } from './item-types.service'
import { ItemType } from 'src/entities/item-type'

@Controller('item-types')
export class ItemTypesController {
  constructor(private readonly itemTypesService: ItemTypesService) {}

  @Get()
  findAll(): [ItemType] {
    return this.itemTypesService.findAll()
  }
}
