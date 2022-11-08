import {IsNotEmpty, IsNumber, IsString} from "class-validator";


export class CreateCategoryDto {

    @IsNumber({}, {message: 'Id must be number'})
    @IsNotEmpty({message: 'This flow must be not empty'})
    public id: number;

    @IsString({message: 'Category must be string'})
    @IsNotEmpty({message: 'This flow must be not empty'})
    public title: string;
}