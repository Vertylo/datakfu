import { ApiProperty } from '@nestjs/swagger'

export class Item {
  @ApiProperty({ type: Number })
  id: number
  @ApiProperty({ type: [String] })
  name: [string]
  @ApiProperty({ type: [String] })
  description: [string]
}

export class ItemData {
  id: number
  name: [string]
  description: [string]
}
