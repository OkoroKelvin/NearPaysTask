import { Injectable } from '@nestjs/common';
import { Shopping } from './Shopping';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ShoppingService {
    constructor(@InjectRepository(Shopping) private repo: Repository<Shopping>) {}


    create(){
        
    }

}
