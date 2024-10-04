import { Controller, Post, Req, Request, Res, Response, Transformable } from '@intentjs/core';
import { UserService } from 'app/services';
import { Validate } from 'class-validator';

@Controller('auth')
export class AuthController extends Transformable {
  constructor(private readonly service: UserService) {
    super();
  }

  @Post('login')
  async loginUser(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    res.json({ success: true, message: 'Login Successful' });
  }

  @Post('register')
  async registerUser(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    res.json({ success: true, message: 'Register Successful' });
  }
}
