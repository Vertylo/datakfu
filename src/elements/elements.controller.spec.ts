import { Test, TestingModule } from '@nestjs/testing'
import { ElementsController } from './elements.controller'
import { ElementsService } from './elements.service'

describe('ElementsController', () => {
  let controller: ElementsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElementsController],
      providers: [ElementsService],
    }).compile()

    controller = module.get<ElementsController>(ElementsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
