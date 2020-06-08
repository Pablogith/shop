import { Injectable } from '@angular/core';

interface IRecentlyViewedProduct {
  id: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecentlyViewedProductsService {

  constructor() { }

  private _products: object[] = [];
  private _keyToProducts: string = 'recentlyViewedProducts';

  addRecentlyViewedProducts(product: IRecentlyViewedProduct): void {
    if (this._products.length <= 4) {
      this._products.unshift(product);
    } else {
      this._products.splice(this._products.length - 1, 1);
      this._products.unshift(product);
    }

    localStorage.removeItem(this._keyToProducts);
    localStorage.setItem(this._keyToProducts, JSON.stringify(this._products));
  }

  getRecentlyViewedProducts(): object[] {
    if (localStorage.getItem(this._keyToProducts) !== null)
      return JSON.parse(localStorage.getItem(this._keyToProducts));
    else {
      return null;
    }
  }
}
