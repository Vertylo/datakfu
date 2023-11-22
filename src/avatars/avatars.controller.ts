import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { AvatarsService } from './avatars.service'
import { Avatar } from 'src/entities/avatar'

@Controller('avatars')
export class AvatarsController {
  constructor(private readonly avatarsService: AvatarsService) {}

  @Get()
  findAll(): [Avatar] {
    return this.avatarsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Avatar {
    return this.avatarsService.findOne(id)
  }
}
