import { Injectable } from '@nestjs/common';
import { Shopping } from './Shopping';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemDto } from 'src/items/ItemDto';
import { User } from 'src/users/User';
import { Item } from 'src/items/Item';
import { ShoppingDto } from './ShoppingDto';

@Injectable()
export class ShoppingService {
    constructor(@InjectRepository(Shopping) private repo: Repository<Shopping>) {}


    async userCreateShopingList(shoppinDto:ShoppingDto){
        const shop = new Shopping(shoppinDto.userId,shoppinDto.item,shoppinDto.category);
        const savedShop = await this.repo.save(shop);
        return savedShop;
    }

    async userCanDeleteShopingList(id:number){
        this.repo.delete(id);
        return "Deleted"
    }

    async userCanUpdateItem()

}
