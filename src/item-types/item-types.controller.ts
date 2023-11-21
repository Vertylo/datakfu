import { Controller, Get } from '@nestjs/common'
import { ItemTypesService } from './item-types.service'

@Controller('item-types')
export class ItemTypesController {
  constructor(private readonly itemTypesService: ItemTypesService) {}

  @Get()
  findAll() {
    return this.itemTypesService.findAll()
  }
}
