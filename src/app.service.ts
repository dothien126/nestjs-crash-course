import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactInfor } from './users/entities/contact-infor.entity';
import { Employee } from './users/entities/employee.entity';
import { Meeting } from './users/entities/meeting.entity';
import { Task } from './users/entities/task.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(ContactInfor) private contactInforRepo: Repository<ContactInfor>,
    @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
    @InjectRepository(Task) private taskRepo: Repository<Task>,
  ) {}

  seed() {}

  getHello(): string {
    return 'Hello World!';
  }
}
