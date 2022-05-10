import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local-strategy';

@Module({
  providers: [AuthService, PassportModule, JwtModule.register({
    secret: 'SECRET!@#',
    signOptions: {expiresIn: '9d'},

  })],
  imports: [UsersService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
