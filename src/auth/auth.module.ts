import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local-strategy';

@Module({
  providers: [AuthService, PassportModule],
  imports: [UsersService, LocalStrategy]
})
export class AuthModule {}
