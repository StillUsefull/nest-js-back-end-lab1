import {Controller, Get, Body, Post, Query, UsePipes, ValidationPipe, ParseIntPipe} from '@nestjs/common';
import { CostService } from './cost.service';
import { CreateCostDto } from './create-cost.dto';
@Controller('/costs')
export class CostController {
  constructor(private readonly appService: CostService) {}

  @Post('new-cost')
  @UsePipes(new ValidationPipe({ transform: true}))
  createCost(@Body('new-cost') cost: CreateCostDto): string {
    return this.appService.createCost(cost);
  }
  @Get()
  getCosts(){
    this.appService.getCosts();
  }
  @Get('cost-by-user')
  getCostsByUserId(@Query('userId', ParseIntPipe) userId: number){
    this.appService.getCostsByUserId(userId);
  }
  @Get('cost-by-id')
  getCostsById(@Query('userId', ParseIntPipe) userId: number, @Query('categoryId', ParseIntPipe) categoryId: number){
    this.appService.getCostsById(userId, categoryId);
  }
}