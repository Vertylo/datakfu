import { Avatar } from './avatar'
import { Element } from './element'
import { ItemData } from './item'
import { ItemRarity } from './item-rarity'
import { ItemSet } from './item-set'
import { ItemType } from './item-type'
import { Job } from './job'

export class WakData {
  avatars: [Avatar]
  elements: [Element]
  items: [ItemData]
  itemRarities: [ItemRarity]
  itemSets: [ItemSet]
  itemTypes: [ItemType]
  jobs: [Job]
}
