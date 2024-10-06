import { Controller, Dto, Post, Validate } from '@intentjs/core';
import { LoginDto } from '../dto';

@Controller('auth')
export class AuthController {

  @Post('login')
  @Validate(LoginDto)
  async loginUser(
    @Dto() dto: LoginDto
  ) {
    return { success: true, message: 'Login Successful' };
  }

  @Post('register')
  async registerUser() {
    return { success: true, message: 'Register Successful' };
  }
}