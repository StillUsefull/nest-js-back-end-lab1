import { Controller, Get, Param, Post, Body, Query, HttpCode} from '@nestjs/common';
import { AppService } from './app.service';
import { UserInterface } from './user.interface';
import {CategoryInterface} from './category.interface';
import {CostInterface} from './cost.interface';



//local storage
let USERS: UserInterface[] = [];
let CATEGORIES: CategoryInterface[] = [];
let COSTS: CostInterface[] = [];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // ok
  @Post('new-user')
  @HttpCode(200)
  createUser(@Body('user') user: UserInterface): any {
    try {
      this.appService.createUser(user, USERS);
    } catch (e) {
      return e.message;
    }
  };
  // ok
  @Post('new-category')
  @HttpCode(200)
  createCategory(@Body('new-category') newCategory: CategoryInterface): any {
    try {
      this.appService.createCategory(newCategory, CATEGORIES);
    } catch (e) {
      return this.appService.newError(e);
    }
  }
  // ok
  @Post('new-cost')
  @HttpCode(200)
  createCost(@Body('new-cost') newCost: any): any{
    
    try {
      this.appService.createCost(newCost, COSTS /*USERS, CATEGORIES*/);
    } catch (e) {
      return this.appService.newError(e);
    }
  }
  //ok
  @Get('categories')
  @HttpCode(200)
  getCategories(): CategoryInterface[] {
    return this.appService.getCategories(CATEGORIES);
  } 

  // ok
  @Get(":id")
  @HttpCode(200)
  getCostsByUserId(@Param('id') id: number): any {
    try {
      return this.appService.getCostsByUserId(id, COSTS);
    } catch (e) {
      return this.appService.newError(e);
    }
  }
  //ok
  @Get()
  @HttpCode(200)
  getCostsById(@Query() query: any): any{
    
    try {
      
      return this.appService.getCostsById(query.userId, query.categoryId, COSTS);
    } catch (e) {
      return this.appService.newError(e);
    }
  }
  
}
