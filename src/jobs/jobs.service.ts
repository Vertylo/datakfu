import { Injectable } from '@nestjs/common'
import { Job } from 'src/entities/job'
import { data } from 'src/main'

@Injectable()
export class JobsService {
  findAll(): [Job] {
    return data.jobs
  }
}
