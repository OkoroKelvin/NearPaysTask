import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dtos/UserDto';
import { LoginDto } from './dtos/LoginDto';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
      ) {}

    @Post('/register')
    async register(@Body() body: UserDto) {
        const user = await this.usersService.register(body.email, body.password,body.name,body.userType);
        return user;
      }

    @Post('/login-single')
    async loginAsSingle(@Body() body: LoginDto) {
        const user = await this.usersService.loginAsSingle(body.email, body.password);
        return user;
      }

    @Post('/login-corporate')
      async loginAsCorporate(@Body() body: LoginDto) {
          const user = await this.usersService.loginAsCorporate(body.email, body.password);
          return user;
        }

}
