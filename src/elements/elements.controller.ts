import { Controller, Get } from '@nestjs/common'
import { ElementsService } from './elements.service'

@Controller('elements')
export class ElementsController {
  constructor(private readonly elementsService: ElementsService) {}

  @Get()
  findAll() {
    return this.elementsService.findAll()
  }
}
