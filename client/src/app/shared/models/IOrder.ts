export interface IOrder {
  name: string;
  surname: string;
  email: string;
  homeNumber: string;
  place: string;
  street: string;
  paymentMethod: string;
  products: any;
  __v?: number;
  _id: string;
  createdAt: string;
  price?: number;
  productId?: string;
}
