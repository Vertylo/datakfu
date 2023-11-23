import { ApiProperty } from '@nestjs/swagger'

export class Monster {
  @ApiProperty()
  id: number
  @ApiProperty()
  name: [string]
}
