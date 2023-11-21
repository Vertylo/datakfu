import { Controller, Get } from '@nestjs/common'
import { ItemRaritiesService } from './item-rarities.service'

@Controller('item-rarities')
export class ItemRaritiesController {
  constructor(private readonly itemRaritiesService: ItemRaritiesService) {}

  @Get()
  findAll() {
    return this.itemRaritiesService.findAll()
  }
}
