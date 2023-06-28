import { Module } from '@nestjs/common';
import { ShoppingService } from './shopping.service';
import { ShoppingController } from './shopping.controller';
import { Shopping } from './Shopping';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Shopping])],
  providers: [ShoppingService],
  controllers: [ShoppingController],
  exports: [ShoppingService],
})
export class ShoppingModule {}
