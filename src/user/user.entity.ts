import {IUser} from './user.interface';
import {Currency} from '../currency/currency.enum';

export class User implements IUser {
    id: number;
    name: string;
    defaultCurrency: Currency;
    constructor(id, name, defaultCurrency = Currency.uah) {
        this.id = id;
        this.name = name;
        this.defaultCurrency = defaultCurrency;
    }
}