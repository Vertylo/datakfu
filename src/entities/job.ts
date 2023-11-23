import { ApiProperty } from '@nestjs/swagger'

export class Job {
  @ApiProperty({ type: Number })
  id: number
  @ApiProperty({ type: [String] })
  name: [string]
}
