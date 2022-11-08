import { Currency } from "src/currency/currency.enum";
export interface ICost {
    id: number;
    userId: number;
    categoryId: number;
    date: Date;
    sum: number;
    userCurrency: Currency;
}
