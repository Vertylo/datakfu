import { ApiProperty } from '@nestjs/swagger'

export class ItemRarity {
  @ApiProperty({ type: Number })
  id: number
  @ApiProperty({ type: [String] })
  name: [string]
}
