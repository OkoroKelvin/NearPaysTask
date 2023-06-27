import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/users/dtos/LoginDto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';


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




}