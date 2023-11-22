import { Test, TestingModule } from '@nestjs/testing'
import { ItemSetsController } from './item-sets.controller'
import { ItemSetsService } from './item-sets.service'

describe('ItemSetsController', () => {
  let controller: ItemSetsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemSetsController],
      providers: [ItemSetsService],
    }).compile()

    controller = module.get<ItemSetsController>(ItemSetsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
