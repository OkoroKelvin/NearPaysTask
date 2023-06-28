import { Injectable } from '@nestjs/common';
import { Item } from './Item';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './Category';

@Injectable()
export class ItemsService {
    constructor(@InjectRepository(Item) private repo: Repository<Item>) {}

    async create(name:string, category:Category){
        const savedItem = await this.repo.save({name,category})
        return savedItem;
    }

}
