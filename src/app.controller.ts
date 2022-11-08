import {Controller, Get, Body, Post, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import { AppService } from './app.service';

import {CreateUserDto} from "./user/create-user.dto";
import {CreateCategoryDto} from "./category/create-category.dto";
import {CreateCostDto} from "./cost/create-cost.dto";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello World'
  }

  @Post('new-user')
  @UsePipes(new ValidationPipe({ transform: true}))
  createUser(@Body('new-user') body: CreateUserDto): string {
    return this.appService.createUser(body);
  }
  @Post('new-category')
  @UsePipes(new ValidationPipe({ transform: true}))
  createCategory(@Body('new-category') category: CreateCategoryDto): string {
    return this.appService.createCategory(category);
  }
  @Post('new-cost')
  @UsePipes(new ValidationPipe({ transform: true}))
  createCost(@Body('new-cost') cost: CreateCostDto): string {
    return this.appService.createCost(cost);
  }
  @Get('categories')
  getCategories(): any {
    return this.appService.getCategories();
  }
  @Get('users')
  
  getUsers(){
    this.appService.getUsers();
  }
  @Get('costs')
  getCosts(){
    this.appService.getCosts();
  }
  @Get('cost-by-user')
  getCostsByUserId(@Query() userId: number){
    this.appService.getCostsByUserId(userId);
  }
}
