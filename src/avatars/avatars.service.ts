import { Injectable, NotFoundException } from '@nestjs/common'
import { Avatar } from 'src/entities/avatar'
import { data } from 'src/main'

@Injectable()
export class AvatarsService {
  findAll(): [Avatar] {
    return data.avatars
  }

  findOne(id: number): Avatar {
    const elem = data.avatars.find((avatar) => avatar.id === id)
    if (!elem) throw new NotFoundException()
    return elem
  }
}
