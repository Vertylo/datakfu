import { Injectable } from '@nestjs/common'
import { data } from 'src/main'

@Injectable()
export class ItemSetsService {
  findAll() {
    return data.itemSets
  }

  findOne(id: number) {
    return data.itemSets.find((set) => set.id === id)
  }
}
