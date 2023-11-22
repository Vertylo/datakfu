import { Controller, Get, Param } from '@nestjs/common'
import { BreedsService } from './breeds.service'

@Controller('classes')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @Get()
  findAll() {
    return this.breedsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.breedsService.findOne(+id)
  }
}
