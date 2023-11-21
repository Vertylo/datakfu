import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ItemsModule } from './items/items.module'
import { ItemRaritiesModule } from './item-rarities/item-rarities.module'
import { ItemTypesModule } from './item-types/item-types.module';

@Module({
  imports: [ItemsModule, ItemRaritiesModule, ItemTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
