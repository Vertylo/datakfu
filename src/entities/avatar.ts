import { ApiProperty } from '@nestjs/swagger'

export class Avatar {
  @ApiProperty({ type: Number })
  id: number
  @ApiProperty({ type: [String] })
  name: [string]
  @ApiProperty({ type: [Number] })
  spellElements: [number]
}
