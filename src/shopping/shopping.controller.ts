import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ShoppingService } from './shopping.service';
import { ItemsService } from 'src/items/items.service';
import { ShoppingDto } from './ShoppingDto';
import { UpdateDto } from './UpdateDto';

@Controller('shopping')
export class ShoppingController {
    constructor(
        private shoppinService: ShoppingService,
        
        
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


      @HttpCode(HttpStatus.OK)
      @Patch('/:id')
      updateShoppin(@Param('id') id: string, @Body() body: UpdateDto){
          return this.shoppinService.userCanUpdateShopingList(parseInt(id),body)
      }

      findAllShippingListByaUser(@Param('id') id:String){
        
      }

}
