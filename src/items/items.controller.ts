import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemDto } from './ItemDto';

@Controller('items')
export class ItemsController {
    constructor(private itemService:ItemsService){

    }

    // @HttpCode(HttpStatus.OK)
    // @Post('create-item')
    // createItem(@Body() body:ItemDto){
    //     return this.itemService.create(body.name,body.category)
    // }
}
