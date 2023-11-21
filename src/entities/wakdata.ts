import { ItemRarity } from './item-rarity'
import { ItemType } from './item-type'

export class WakData {
  items: [ItemData]
  itemRarities: [ItemRarity]
  itemTypes: [ItemType]
}

class ItemData {
  id: number
  name: [string]
  description: [string]
}
