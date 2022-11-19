import {Controller, Get, Body, Post, Query, UsePipes, ValidationPipe, ParseIntPipe} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
@Controller('/users')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getUsers(){
    this.appService.getUsers();
  }
  @Post('new-user')
  @UsePipes(new ValidationPipe({ transform: true}))
  createUser(@Body('new-user') body: CreateUserDto): string {
    return this.appService.createUser(body);
  }

}