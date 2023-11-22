import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { ItemSetsService } from './item-sets.service'
import { ItemSet } from 'src/entities/item-set'
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

@ApiTags('Items')
@Controller('item-sets')
export class ItemSetsController {
  constructor(private readonly itemSetsService: ItemSetsService) {}

  @Get()
  @ApiOkResponse({ description: 'OK', type: [ItemSet] })
  findAll(): [ItemSet] {
    return this.itemSetsService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ description: 'OK', type: ItemSet })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @ApiNotFoundResponse({ description: 'Not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): ItemSet {
    return this.itemSetsService.findOne(id)
  }
}
