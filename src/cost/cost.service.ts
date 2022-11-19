import { Injectable } from '@nestjs/common';
import { Cost } from './cost.entity';
import { CreateCostDto } from './create-cost.dto';
import {ICost} from './cost.interface'
@Injectable()
export class CostService {
  private COSTS: Cost[] = [];
  createCost(newCost: CreateCostDto): string {
    let cost = new Cost(newCost.id, newCost.userId, newCost.categoryId, newCost.date ,newCost.sum);
    this.COSTS.push(cost);
    return 'Cost was created';
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