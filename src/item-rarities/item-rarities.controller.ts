import { Controller, Get } from '@nestjs/common'
import { ItemRaritiesService } from './item-rarities.service'
import { ItemRarity } from 'src/entities/item-rarity'

@Controller('item-rarities')
export class ItemRaritiesController {
  constructor(private readonly itemRaritiesService: ItemRaritiesService) {}

  @Get()
  findAll(): [ItemRarity] {
    return this.itemRaritiesService.findAll()
  }
}
