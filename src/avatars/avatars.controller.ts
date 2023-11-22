import { Controller, Get, Param } from '@nestjs/common'
import { AvatarsService } from './avatars.service'

@Controller('avatars')
export class AvatarsController {
  constructor(private readonly avatarsService: AvatarsService) {}

  @Get()
  findAll() {
    return this.avatarsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avatarsService.findOne(+id)
  }
}
