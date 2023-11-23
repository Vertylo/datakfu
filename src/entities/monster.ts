import { ApiProperty } from '@nestjs/swagger'

export class Monster {
  @ApiProperty({ type: Number })
  id: number
  @ApiProperty({ type: [String] })
  name: [string]
}
