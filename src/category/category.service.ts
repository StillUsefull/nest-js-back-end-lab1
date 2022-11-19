import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { CreateCategoryDto } from './create-category.dto';
import { ICategory } from './category.interface';
@Injectable()
export class CategoryService {
    private CATEGORIES: Category[] = [];
    getCategories(): ICategory[] {
        return this.CATEGORIES;
    }
    createCategory(newCategory: CreateCategoryDto): string {
        let category = new Category(newCategory.id, newCategory.title);
        this.CATEGORIES.push(category)
        return 'Category was created';
    }
}