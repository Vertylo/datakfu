import { ApiProperty } from '@nestjs/swagger'

export class ItemType {
  @ApiProperty({ type: Number })
  id: number
  @ApiProperty({ type: [String] })
  name: [string]
  @ApiProperty({ type: Number })
  parentId: number
}
