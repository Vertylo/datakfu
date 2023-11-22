import { Injectable } from '@nestjs/common'
import { ItemRarity } from 'src/entities/item-rarity'
import { data } from 'src/main'

@Injectable()
export class ItemRaritiesService {
  findAll(): [ItemRarity] {
    return data.itemRarities
  }
}
