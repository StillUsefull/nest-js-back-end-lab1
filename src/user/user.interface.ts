import {CurrencyEnum} from "../currency/currency.enum";

export interface IUser {
    id: number,
    name: string,
    defaultCurrency: CurrencyEnum;
}