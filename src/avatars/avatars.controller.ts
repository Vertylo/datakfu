import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { AvatarsService } from './avatars.service'
import { Avatar } from 'src/entities/avatar'
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

@ApiTags('Avatars')
@Controller('avatars')
export class AvatarsController {
  constructor(private readonly avatarsService: AvatarsService) {}

  @Get()
  @ApiOkResponse({ description: 'OK', type: [Avatar] })
  findAll(): [Avatar] {
    return this.avatarsService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ description: 'OK', type: Avatar })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @ApiNotFoundResponse({ description: 'Not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Avatar {
    return this.avatarsService.findOne(id)
  }
}
