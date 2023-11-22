import { Injectable } from '@nestjs/common'
import { data } from 'src/main'

@Injectable()
export class ElementsService {
  findAll() {
    return data.elements
  }
}
