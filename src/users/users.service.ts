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

    async loginAsSingle(email: string, password: string){

        const foundUser = await this.repo.findOneBy({email });

        if(!foundUser){
            throw new BadRequestException("User does not exist, please register")
        }

        if(foundUser.password != password){
            throw new BadRequestException("Wrong Password")
        }

        if(foundUser.userType == UserType.CORPORATE){
            throw new BadRequestException("You are not a Single account, try Coperate login")
        }


        return foundUser;
    }

    async loginAsCorporate(email: string, password: string){

        const foundUser = await this.repo.findOneBy({email });

        if(!foundUser){
            throw new BadRequestException("User does not exist, please register")
        }

        if(foundUser.password != password){
            throw new BadRequestException("Wrong Password")
        }

        if(foundUser.userType == UserType.SINGLE){
            throw new BadRequestException("You are not a Coperate account, try Single login")
        }


        return foundUser;
    }

}
