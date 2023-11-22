import { Injectable } from '@nestjs/common'
import { data } from 'src/main'

@Injectable()
export class BreedsService {
  findAll() {
    return data.breeds
  }

  findOne(id: number) {
    return data.breeds.find((breed) => breed.id === id)
  }
}
