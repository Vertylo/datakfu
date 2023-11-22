import { Controller, Get } from '@nestjs/common'
import { ElementsService } from './elements.service'
import { Element } from 'src/entities/element'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Misc')
@Controller('elements')
export class ElementsController {
  constructor(private readonly elementsService: ElementsService) {}

  @Get()
  @ApiOkResponse({ description: 'OK', type: [Element] })
  findAll(): [Element] {
    return this.elementsService.findAll()
  }
}
