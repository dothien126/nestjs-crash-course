import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { SerializedUser } from './types/User';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject('User_Service')
    private readonly userService: UserService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  getByUsername(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);
    if (user) {
      return new SerializedUser(user);
    } else {
      throw new HttpException('User not found!', HttpStatus.BAD_REQUEST);
    }
  }
}
