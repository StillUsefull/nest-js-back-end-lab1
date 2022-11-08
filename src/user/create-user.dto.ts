import {IS_ENUM, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {CurrencyEnum} from "../currency/currency.enum";


export class CreateUserDto {
    @IsNumber({}, {message: 'Id must be number'})
    @IsNotEmpty({message: 'This flow must be not empty'})
    public id: number;

    @IsString({message: 'Name must be string'})
    @IsNotEmpty({message: 'This flow must be not empty'})
    public name: string;


}