import {Controller, Get, Body, Post, Query, UsePipes, ValidationPipe, ParseIntPipe} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './create-category.dto';
@Controller('/categories')
export class CategoryController {
  constructor(private readonly appService: CategoryService) {}
  @Get()
  getCategories(): any {
    return this.appService.getCategories();
  }
  @Post('new-category')
  @UsePipes(new ValidationPipe({ transform: true}))
  createCategory(@Body('new-category') category: CreateCategoryDto): string {
    return this.appService.createCategory(category);
  }
  
  
}