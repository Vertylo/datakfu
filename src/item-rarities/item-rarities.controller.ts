import { Controller, Get } from '@nestjs/common'
import { ItemRaritiesService } from './item-rarities.service'
import { ItemRarity } from 'src/entities/item-rarity'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Items')
@Controller('item-rarities')
export class ItemRaritiesController {
  constructor(private readonly itemRaritiesService: ItemRaritiesService) {}

  @Get()
  @ApiOkResponse({ description: 'OK', type: [ItemRarity] })
  findAll(): [ItemRarity] {
    return this.itemRaritiesService.findAll()
  }
}
