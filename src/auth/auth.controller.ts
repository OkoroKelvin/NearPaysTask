import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/users/dtos/LoginDto';
import { UserDto } from 'src/users/dtos/UserDto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login-single-merchant')
  loginAsSingleMerchant(@Body() body:LoginDto) {
    return this.authService.loginAsSingleMerchant(body); 
  }

  @HttpCode(HttpStatus.OK)
  @Post('login-corporate-merchant')
  loginAsCoperateMerchant(@Body() body:LoginDto) {
    return this.authService.loginAsCoperateMerchant(body); 
  }

  
  @HttpCode(HttpStatus.OK)
  @Post('register-merchant')
  registerMerchant(@Body() body:UserDto) {
    return this.authService.registerMerchant(body); 
  }
}
