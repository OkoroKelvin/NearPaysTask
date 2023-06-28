import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ShoppingService } from './shopping.service';
import { ItemsService } from 'src/items/items.service';
import { ShoppingDto } from './ShoppingDto';

@Controller('shopping')
export class ShoppingController {
    constructor(
        private shoppinService: ShoppingService,
        //private itemService: ItemsService
        
      ) {}

      
      @HttpCode(HttpStatus.OK)
      @Post('create-shopping')
      createShopping(@Body() body:ShoppingDto){
          return this.shoppinService.userCreateShopingList(body)
      }

      @HttpCode(HttpStatus.OK)
      @Delete('/:id')
      deleteShoppin(@Param('id') id: string){
          return this.shoppinService.userCanDeleteShopingList(parseInt(id))
      }

}
