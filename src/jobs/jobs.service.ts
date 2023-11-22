import { Injectable } from '@nestjs/common'
import { data } from 'src/main'

@Injectable()
export class JobsService {
  findAll() {
    return data.jobs
  }
}
