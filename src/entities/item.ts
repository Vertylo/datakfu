import { ApiProperty } from '@nestjs/swagger'

export class Item {
  @ApiProperty()
  id: number
  @ApiProperty()
  name: [string]
  @ApiProperty()
  description: [string]
}

export class ItemData {
  id: number
  name: [string]
  description: [string]
}
