import { Injectable, NotFoundException } from '@nestjs/common'
import { Item } from 'src/entities/item'
import { data } from 'src/main'

@Injectable()
export class ItemsService {
  findAll(): [Item] {
    return data.items
  }

  findOne(id: number): Item {
    const elem = data.items.find((item) => item.id == id)
    if (!elem) throw new NotFoundException()
    return elem
  }
}
