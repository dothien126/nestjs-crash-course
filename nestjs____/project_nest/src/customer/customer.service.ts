import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  findCustomer() {
    return {
      id: 1,
      name: 'hello',
    };
  }
}
