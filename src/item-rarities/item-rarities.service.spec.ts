import { Test, TestingModule } from '@nestjs/testing'
import { ItemRaritiesService } from './item-rarities.service'

describe('ItemRaritiesService', () => {
  let service: ItemRaritiesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemRaritiesService],
    }).compile()

    service = module.get<ItemRaritiesService>(ItemRaritiesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
