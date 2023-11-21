import { Test, TestingModule } from '@nestjs/testing'
import { ItemTypesService } from './item-types.service'

describe('ItemTypesService', () => {
  let service: ItemTypesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemTypesService],
    }).compile()

    service = module.get<ItemTypesService>(ItemTypesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
