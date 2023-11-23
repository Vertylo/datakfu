import { Module } from '@nestjs/common'
import { ItemsModule } from './items/items.module'
import { ItemRaritiesModule } from './item-rarities/item-rarities.module'
import { ItemTypesModule } from './item-types/item-types.module'
import { JobsModule } from './jobs/jobs.module'
import { ItemSetsModule } from './item-sets/item-sets.module'
import { ElementsModule } from './elements/elements.module'
import { AvatarsModule } from './avatars/avatars.module'
import { MonstersModule } from './monsters/monsters.module'

@Module({
  imports: [
    ItemsModule,
    ItemRaritiesModule,
    ItemTypesModule,
    JobsModule,
    ItemSetsModule,
    ElementsModule,
    AvatarsModule,
    MonstersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
