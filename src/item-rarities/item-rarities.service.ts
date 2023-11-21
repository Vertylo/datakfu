import { Injectable } from '@nestjs/common'
import { data } from 'src/main'

@Injectable()
export class ItemRaritiesService {
  findAll() {
    return data.itemRarities
  }
}
