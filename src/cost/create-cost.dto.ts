import {IsNotEmpty, IsNumber} from "class-validator";


export class CreateCostDto {

    @IsNumber({}, {message: 'Id must be number'})
    @IsNotEmpty({message: 'This flow must be not empty'})
    public id: number;

    @IsNumber({}, {message: 'User Id must be number'})
    @IsNotEmpty({message: 'This flow must be not empty'})
    public userId: number;

    @IsNumber({}, {message: 'Category Id must be number'})
    @IsNotEmpty({message: 'This flow must be not empty'})
    public categoryId: number;

    public date: Date = new Date();

    @IsNumber({}, {message: 'Sum must be number'})
    @IsNotEmpty({message: 'This flow must be not empty'})
    public sum: number;
}