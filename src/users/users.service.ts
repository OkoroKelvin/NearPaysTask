import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User';
import { UserType } from './dtos/userType';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {

    }

    async register(email: string, password: string, name: string, userType: UserType){

        const foundUser = await this.repo.findOneBy({email });

        if(foundUser){
            throw new BadRequestException("User already exist")
        }

        const user = this.repo.create({email,password,name,userType});

        return this.repo.save(user);
    }

}
