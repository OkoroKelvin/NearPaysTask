import { Module } from '@nestjs/common';
import { ShoppingService } from './shopping.service';
import { ShoppingController } from './shopping.controller';
import { Shopping } from './Shopping';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsService } from 'src/items/items.service';

@Module({
  imports: [TypeOrmModule.forFeature([Shopping])],
  providers: [ShoppingService],
  controllers: [ShoppingController],
  exports: [ShoppingService],
})
export class ShoppingModule {}
