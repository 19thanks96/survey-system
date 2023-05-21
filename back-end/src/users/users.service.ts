import { Injectable } from '@nestjs/common';
import { Role } from 'src/auth/role.enum';


// This should be a real class/interface representing a user entity
import { User } from './user';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      roles: [Role.Admin],
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      roles: [Role.User],
    },
    {
        userId: 3,
        username: 'Anton',
        password: 'guess',
        roles: [Role.User],
      },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}