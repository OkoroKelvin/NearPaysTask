import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dtos/UserDto';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
      ) {}

    @Post('/signup')
    async register(@Body() body: UserDto) {
        const user = await this.usersService.register(body.email, body.password,body.name,body.userType);
        return user;
      }

}
