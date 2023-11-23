import { ApiProperty } from '@nestjs/swagger'

export class ItemSet {
  @ApiProperty({ type: Number })
  id: number
  @ApiProperty({ type: [String] })
  name: [string]
  @ApiProperty({ type: [Number] })
  itemsId: [number]
  @ApiProperty({ type: Number })
  referenceId: number
}
