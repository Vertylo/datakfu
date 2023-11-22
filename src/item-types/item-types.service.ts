import { Injectable } from '@nestjs/common'
import { ItemType } from 'src/entities/item-type'
import { data } from 'src/main'

@Injectable()
export class ItemTypesService {
  findAll(): [ItemType] {
    return data.itemTypes
  }
}
