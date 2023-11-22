import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { ItemsService } from './items.service'
import { Item } from 'src/entities/item'
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiOkResponse({ description: 'OK', type: [Item] })
  findAll(): [Item] {
    return this.itemsService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ description: 'OK', type: Item })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @ApiNotFoundResponse({ description: 'Not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Item {
    return this.itemsService.findOne(id)
  }
}
