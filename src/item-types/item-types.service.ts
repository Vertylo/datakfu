import { Injectable } from '@nestjs/common'
import { data } from 'src/main'

@Injectable()
export class ItemTypesService {
  findAll() {
    return data.itemTypes
  }
}
