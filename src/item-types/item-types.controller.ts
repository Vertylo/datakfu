import { Controller, Get } from '@nestjs/common'
import { ItemTypesService } from './item-types.service'
import { ItemType } from 'src/entities/item-type'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Items')
@Controller('item-types')
export class ItemTypesController {
  constructor(private readonly itemTypesService: ItemTypesService) {}

  @Get()
  @ApiOkResponse({ description: 'OK', type: [ItemType] })
  findAll(): [ItemType] {
    return this.itemTypesService.findAll()
  }
}
