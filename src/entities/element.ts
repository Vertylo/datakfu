import { ApiProperty } from '@nestjs/swagger'

export class Element {
  @ApiProperty()
  id: number
  @ApiProperty()
  name: [string]
}
