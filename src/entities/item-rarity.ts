import { ApiProperty } from '@nestjs/swagger'

export class ItemRarity {
  @ApiProperty()
  id: number
  @ApiProperty()
  name: [string]
}
