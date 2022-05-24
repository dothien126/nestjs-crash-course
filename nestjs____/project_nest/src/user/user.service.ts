import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from './types/User';

@Injectable()
export class UserService {
  private user: User[] = [
    {
      username: 'onee',
      password: 'onee',
    },
    {
      username: 'twoo',
      password: 'twoo',
    },
    {
      username: 'threeee',
      password: 'threeee',
    },
  ];

  getUser() {
    return this.user.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.user.find((user) => (user.username = username));
  }
}
