import { ApiProperty } from '@nestjs/swagger'

export class Job {
  @ApiProperty()
  id: number
  @ApiProperty()
  name: [string]
}
