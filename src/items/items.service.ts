import { Injectable } from '@nestjs/common'
import { data } from 'src/main'

@Injectable()
export class ItemsService {
  findAll() {
    return data.items
  }

  findOne(id: number) {
    return data.items.find((item) => item.id == id)
  }
}
