import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User';
import { UserType } from './dtos/userType';
import { scrypt as _scrypt} from 'crypto';
import { promisify } from 'util';
const scrypt = promisify(_scrypt);


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}

    create (email: string, password: string, name: string, userType: UserType){
        const user = this.repo.create({email,password,name,userType});
        return this.repo.save(user);
    }

    find(email: string) {
        return this.repo.findOneBy({ email });
    }

    async loginAsSingle(email: string, password: string) {

        const foundUser = await this.repo.findOneBy({email });

        
        const [salt, storedHash] = foundUser.password.split('.');

        const hash = (await scrypt(password, salt, 32)) as Buffer;


        if(!foundUser){
            throw new BadRequestException("User does not exist, please register")
        }

        if( storedHash != hash.toString('hex')){
            throw new UnauthorizedException("Wrong Password")
        }

        if(foundUser.userType == UserType.CORPORATE){
            throw new BadRequestException("You are not a Single account, try Coperate login")
        }


        return foundUser;
    }

    async loginAsCorporate(email: string, password: string){

        const foundUser = await this.repo.findOneBy({email });

        const [salt, storedHash] = foundUser.password.split('.');

        const hash = (await scrypt(password, salt, 32)) as Buffer;

        if(!foundUser){
            throw new BadRequestException("User does not exist, please register")
        }

        if( storedHash != hash.toString('hex')){
            throw new UnauthorizedException("Wrong Password")
        }

        if(foundUser.userType == UserType.SINGLE){
            throw new BadRequestException("You are not a Coperate account, try Single login")
        }


        return foundUser;
    }

}
