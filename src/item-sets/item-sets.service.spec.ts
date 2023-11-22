import { Test, TestingModule } from '@nestjs/testing'
import { ItemSetsService } from './item-sets.service'

describe('ItemSetsService', () => {
  let service: ItemSetsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemSetsService],
    }).compile()

    service = module.get<ItemSetsService>(ItemSetsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
