import {ICategory} from "./category.interface";


export class Category implements ICategory {
    id: number;
    category: string;
    constructor(id, category) {
        this.id = id;
        this.category = category;
    }
}