import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 24,
    },
  ];

  findAll() {
    return this.users;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
