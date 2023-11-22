import { Injectable, NotFoundException } from '@nestjs/common'
import { ItemSet } from 'src/entities/item-set'
import { data } from 'src/main'

@Injectable()
export class ItemSetsService {
  findAll(): [ItemSet] {
    return data.itemSets
  }

  findOne(id: number): ItemSet {
    const elem = data.itemSets.find((set) => set.id === id)
    if (!elem) throw new NotFoundException()
    return elem
  }
}
