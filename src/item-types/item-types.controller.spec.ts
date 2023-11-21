import { Test, TestingModule } from '@nestjs/testing'
import { ItemTypesController } from './item-types.controller'
import { ItemTypesService } from './item-types.service'

describe('ItemTypesController', () => {
  let controller: ItemTypesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemTypesController],
      providers: [ItemTypesService],
    }).compile()

    controller = module.get<ItemTypesController>(ItemTypesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
