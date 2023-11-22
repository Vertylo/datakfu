import { ApiProperty } from '@nestjs/swagger'

export class ItemType {
  @ApiProperty()
  id: number
  @ApiProperty()
  name: [string]
  @ApiProperty()
  parentId: number
}
