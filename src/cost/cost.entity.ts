import {ICost} from "./cost.interface";
import { User } from "../user/user.entity";
import { Category } from "../category/category.entity";
export class Cost implements ICost {
    id: number;
    userId: number;
    categoryId: number;
    date: Date;
    sum: number;
    constructor(id, userId, categoryId, date = new Date(), sum) {
        this.id = id;
        this.userId = userId;
        this.categoryId = categoryId;
        this.date = date;
        this.sum = sum;
    }
    isValid(users:User[], categories: Category[]): boolean{
        let userValid = false;
        let categoryValid = false;
        users.forEach((user: User) => {
            if (user.id == this.userId){
                userValid = true;
                
            }
        });
        categories.forEach((category: Category) => {
            if (category.id == this.categoryId){
                categoryValid = true;
                
            }
        })
        return userValid && categoryValid;
    }
}