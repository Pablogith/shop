import {Currencies} from "./currencies";

export interface IItem {
  id: number;
  image?: string;
  name: string;
  price: number;
  description: string
  currency: Currencies;
}
