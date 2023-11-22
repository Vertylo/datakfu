import { Injectable } from '@nestjs/common'
import { Element } from 'src/entities/element'
import { data } from 'src/main'

@Injectable()
export class ElementsService {
  findAll(): [Element] {
    return data.elements
  }
}
