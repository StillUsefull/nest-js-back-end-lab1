import {IUser} from './user.interface';
import {CurrencyEnum} from "../currency/currency.enum";

export class User implements IUser {
    id: number;
    name: string;
    defaultCurrency: CurrencyEnum;
    constructor(id, name, defaultCurrency = CurrencyEnum.UAH) {
        this.id = id;
        this.name = name;
        this.defaultCurrency = defaultCurrency;
    }
}