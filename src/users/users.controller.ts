import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dtos/UserDto';
import { LoginDto } from './dtos/LoginDto';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
      ) {}

}
