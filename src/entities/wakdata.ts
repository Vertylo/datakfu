import { ItemRarity } from './item-rarity'
import { ItemSet } from './item-set'
import { ItemType } from './item-type'
import { Job } from './job'

export class WakData {
  items: [ItemData]
  itemRarities: [ItemRarity]
  itemSets: [ItemSet]
  itemTypes: [ItemType]
  jobs: [Job]
}

class ItemData {
  id: number
  name: [string]
  description: [string]
}
