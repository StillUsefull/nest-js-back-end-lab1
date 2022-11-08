import { Injectable } from '@nestjs/common';
import { User } from './user/user.entity';

import {CreateUserDto} from "./user/create-user.dto";
import {CreateCategoryDto} from "./category/create-category.dto";
import {ICategory} from "./category/category.interface";
import {Category} from "./category/category.entity";
import {CreateCostDto} from "./cost/create-cost.dto";
import {Cost} from "./cost/cost.entity";
import {ICost} from "./cost/cost.interface";
@Injectable()
export class AppService {

  private USERS: User[] = [];
  private CATEGORIES: Category[] = [];
  private COSTS: Cost[] = [];
  createUser(newUser: CreateUserDto): string {
    let user = new User(newUser.id, newUser.name);
    this.USERS.push(user);
    return 'User was created';
  }

  createCategory(newCategory: CreateCategoryDto): string {
    let category = new Category(newCategory.id, newCategory.title);
    this.CATEGORIES.push(category)
    return 'Category was created';
  }

  createCost(newCost: CreateCostDto): string {
    let cost = new Cost(newCost.id, newCost.userId, newCost.categoryId, newCost.date ,newCost.sum);
    this.COSTS.push(cost);
    return 'Cost was created';
  }
  getCategories(): ICategory[] {
    return this.CATEGORIES;
  }
  getUsers(): User[] {
    return this.USERS;
  }
  getCosts(): Cost[] {
    return this.COSTS;
  }
  getCostsByUserId(userId: number): Cost[]{
    const costsArray: Cost[] = []
    this.COSTS.forEach((item): void => {
      if (item.userId == userId){
        costsArray.push(item);
      }
    })
    return costsArray;
  }

  getCostsById(userId: number, categoryId: number): ICost[] {
    const costsArray: ICost[] = []
    this.COSTS.forEach((item): void => {
      if (item.userId == userId && item.categoryId == categoryId){
        costsArray.push(item);
      }
    })
    return costsArray;
  }
}
