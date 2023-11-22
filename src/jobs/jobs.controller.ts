import { Controller, Get } from '@nestjs/common'
import { JobsService } from './jobs.service'
import { Job } from 'src/entities/job'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Crafts')
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  @ApiOkResponse({ description: 'OK', type: [Job] })
  findAll(): [Job] {
    return this.jobsService.findAll()
  }
}
