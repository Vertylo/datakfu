import { ApiProperty } from '@nestjs/swagger'

export class Avatar {
  @ApiProperty()
  id: number
  @ApiProperty()
  name: [string]
  @ApiProperty({ type: [Number] })
  spellElements: [number]
}
