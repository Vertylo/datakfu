import { Test, TestingModule } from '@nestjs/testing'
import { ItemRaritiesController } from './item-rarities.controller'
import { ItemRaritiesService } from './item-rarities.service'

describe('ItemRaritiesController', () => {
  let controller: ItemRaritiesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemRaritiesController],
      providers: [ItemRaritiesService],
    }).compile()

    controller = module.get<ItemRaritiesController>(ItemRaritiesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
