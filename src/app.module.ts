import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { Employee } from './users/entities/employee.entity';
import { ContactInfor } from './users/entities/contact-infor.entity';
import { Task } from './users/entities/task.entity';
import { Meeting } from './users/entities/meeting.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(config),
  TypeOrmModule.forFeature([Employee, ContactInfor, Task, Meeting]),
  AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
