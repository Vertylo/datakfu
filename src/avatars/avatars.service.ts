import { Injectable } from '@nestjs/common'
import { data } from 'src/main'

@Injectable()
export class AvatarsService {
  findAll() {
    return data.avatars
  }

  findOne(id: number) {
    return data.avatars.find((avatar) => avatar.id === id)
  }
}
