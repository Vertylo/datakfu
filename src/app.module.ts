import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ItemsModule } from './items/items.module'
import { ItemRaritiesModule } from './item-rarities/item-rarities.module'
import { ItemTypesModule } from './item-types/item-types.module'
import { JobsModule } from './jobs/jobs.module'
import { ItemSetsModule } from './item-sets/item-sets.module'
import { ElementsModule } from './elements/elements.module'
import { BreedsModule } from './breeds/breeds.module'

@Module({
  imports: [
    ItemsModule,
    ItemRaritiesModule,
    ItemTypesModule,
    JobsModule,
    ItemSetsModule,
    ElementsModule,
    BreedsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
