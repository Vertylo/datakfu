import { Controller, Get, Param } from '@nestjs/common'
import { MonstersService } from './monsters.service'
import { Monster } from 'src/entities/monster'
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

@ApiTags('Monsters')
@Controller('monsters')
export class MonstersController {
  constructor(private readonly monstersService: MonstersService) {}

  @Get()
  @ApiOkResponse({ description: 'OK', type: [Monster] })
  findAll(): [Monster] {
    return this.monstersService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ description: 'OK', type: Monster })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @ApiNotFoundResponse({ description: 'Not found.' })
  findOne(@Param('id') id: string): Monster {
    return this.monstersService.findOne(+id)
  }
}
