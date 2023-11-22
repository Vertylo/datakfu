import { ApiProperty } from '@nestjs/swagger'

export class ItemSet {
  @ApiProperty()
  id: number
  @ApiProperty()
  name: [string]
  @ApiProperty({ type: [Number] })
  itemsId: [number]
  @ApiProperty()
  referenceId: number
}
