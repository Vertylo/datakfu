import { Injectable, NotFoundException } from '@nestjs/common'
import { data } from 'src/main'

@Injectable()
export class MonstersService {
  findAll() {
    return data.monsters
  }

  findOne(id: number) {
    const elem = data.monsters.find((monster) => monster.id === id)
    if (!elem) throw new NotFoundException()
    return elem
  }
}
