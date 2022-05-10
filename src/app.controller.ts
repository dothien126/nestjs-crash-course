import { Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Post /login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any{
    return req.user;
  }

  // Get /protected
  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }
}
