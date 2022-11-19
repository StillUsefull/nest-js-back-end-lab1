import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
@Injectable()
export class UserService {
  private USERS: User[] = [];
  createUser(newUser: CreateUserDto): string {
    let user = new User(newUser.id, newUser.name);
    this.USERS.push(user);
    return 'User was created';
  }
  getUsers(): User[] {
    return this.USERS;
  }
}