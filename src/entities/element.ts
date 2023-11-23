import { ApiProperty } from '@nestjs/swagger'

export class Element {
  @ApiProperty({ type: Number })
  id: number
  @ApiProperty({ type: [String] })
  name: [string]
}
