import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity'
import { ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOkResponse({type: User, isArray: true})
  @ApiQuery({name: 'name', required: false})
  @Get()
  getUserList(@Query('name') name: string): User[] {
    return this.userService.findAll();
  }

  @ApiOkResponse({type: User, description: 'The user'})
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    const user = this.userService.findById(Number(id));
    
    if(!user) {
      throw new BadRequestException();
    }

    return user
  }

  @ApiCreatedResponse({type: User})
  @Post('create')
  createUser(@Body() body: CreateUserDto): User {
    return this.userService.createUser(body)
  }
}
