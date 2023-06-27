import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from 'src/users/dtos/LoginDto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dtos/UserDto';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';


const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
       ) {}

    async loginAsSingleMerchant(loginDto:LoginDto){
        const users = await this.usersService.loginAsSingle(loginDto.email,loginDto.password);
        const payload = { sub: users.id, username: users.email };

        return {
            access_token: await this.jwtService.signAsync(payload),
          };

    }

    async loginAsCoperateMerchant(loginDto:LoginDto){
        const users = await this.usersService.loginAsCorporate(loginDto.email,loginDto.password);
        const payload = { sub: users.id, username: users.email };

        return {
            access_token: await this.jwtService.signAsync(payload),
          };

    }


    async registerMerchant(userDto:UserDto){
        const foundUser = await this.usersService.find(userDto.email);

        if(foundUser){
            throw new BadRequestException("User already exist")
        }

        const salt = randomBytes(8).toString('hex');
        const hash = (await scrypt(userDto.password, salt, 32)) as Buffer;

        const result = salt + '.' + hash.toString('hex');

        const user = await this.usersService.create(userDto.email,result,userDto.name,userDto.userType);

        return user;
    }




}