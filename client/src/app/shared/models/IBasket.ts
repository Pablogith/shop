export interface IProductInformation {
  _id: string;
  category: string;
  amount: number;
}

export default interface IBasket {
  products: Array<IProductInformation>;
}

export type Basket = Array<IProductInformation>;
