import { Controller, Get } from '@nestjs/common'
import { JobsService } from './jobs.service'
import { Job } from 'src/entities/job'

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  findAll(): [Job] {
    return this.jobsService.findAll()
  }
}
