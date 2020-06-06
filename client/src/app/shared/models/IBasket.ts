export interface IProductInformation {
  _id: string;
  category: string;
  amount: number;
  price?: number;
}

export type Basket = Array<IProductInformation>;
