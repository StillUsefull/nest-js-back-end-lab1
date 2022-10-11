import { Injectable } from '@nestjs/common';
import { UserInterface } from './user.interface';
import { CategoryInterface } from './category.interface';
import { CostInterface } from './cost.interface';
@Injectable()
export class AppService {
  //ok
  createUser(newUser: UserInterface, users: UserInterface[]): any {
    let user: UserInterface = {
      id: newUser.id,
      name: newUser.name
    }
    users.push(user);
    // console.log(users); //- array test
    
  }

  //ok
  createCategory(newCategory: CategoryInterface, categories: CategoryInterface[]): void {
    let category: CategoryInterface= {
      id: newCategory.id,
      title: newCategory.title
    }
    categories.push(category);
    //console.log(categories); //- array test
  }

  //will fix on second lab
  // ok
  createCost(newCost: any, costs: CostInterface[], /* users: UserInterface[], categories: CategoryInterface[]*/): any {
    // let getUserId: boolean = false;  
    // let getCategoryId: boolean = false;
    // users.forEach((item): void => {          - is not working because arrays
    //     if (item.id == newCost.userId){      - cannot cache in working
    //       getUserId = true;                  - !!! i must use database or json file
    //     }
    //   })
    // categories.forEach((item): void => {
    //   if (item.id == newCost.categoryId){
    //     getCategoryId = true;
    //   }
    // }) 
    // if (getCategoryId && getUserId) {
      let cost: CostInterface = {
        id: newCost.id,
        userId: newCost.userId,
        categoryId: newCost.categoryId,
        time: new Date,
        sum: newCost.sum
      }
      costs.push(cost);
      
    // } else {
    //   return "no such user or category id"
    // } 
  }

  //ok
  getCategories(categories: CategoryInterface[]): CategoryInterface[] {
    return categories;
  }
  //ok
  getCostsByUserId(userId: any, costs: CostInterface[]): CostInterface[] {
    let array: CostInterface[] = [];
    costs.forEach((item): void => {
      if (item.userId == +userId) {
        array.push(item);
      }
    })

    return array;
  }
  // ok
  getCostsById(userId: number, categoryId: number, costs: CostInterface[]): any {
    let array: any = [];
    
    costs.forEach((item): void => {
      if (item.userId == +userId && item.categoryId == +categoryId){
        array.push(item);
      }
    })
    return array;
    
  }
  // ok
  newError(e: Error): string {
    console.log(e.message);
    return "Something is wrong with data"
  }
}


