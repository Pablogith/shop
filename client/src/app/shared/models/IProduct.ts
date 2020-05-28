import {Currencies} from "./currencies";

export interface IProduct {
  _id: string;
  _v: number;
  image: string;
  name: string;
  price: number;
  description: string
  currency: Currencies;
  createdAt: string;
  category: string;
}
