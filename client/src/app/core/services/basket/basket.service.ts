import {Injectable} from '@angular/core';
import {Basket, IProductInformation} from "../../../shared/models/IBasket";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() {
  }

  private _basketElements: Basket = [];
  private _summaryPrice: number = 0;

  private getItemIndex(itemId: string): number {
    return this._basketElements.findIndex((item: IProductInformation) => item._id === itemId);
  }

  addToBasket(newItem: IProductInformation): void {
    const isUnique: boolean = this._basketElements.every((item: IProductInformation) => item._id !== newItem._id);

    if (isUnique) {
      this._basketElements.push(newItem);
    } else {
      const itemIndex: number = this.getItemIndex(newItem._id);

      if (this._basketElements[itemIndex].amount >= 5) {
        this._basketElements[itemIndex].amount = 5
      } else {
        const sum = this._basketElements[itemIndex].amount + newItem.amount;

        (sum >= 5)
          ? this._basketElements[itemIndex].amount = 5
          : this._basketElements[itemIndex].amount += newItem.amount;
      }
    }
  }

  increaseTheAmount(itemId: string): number {
    const itemIndex: number = this.getItemIndex(itemId);

    if  (this._basketElements[itemIndex].amount >= 5) {
      this._basketElements[itemIndex].amount = 5
    } else {
      let itemPrice: number = this._basketElements[itemIndex].price / this._basketElements[itemIndex].amount;
      this._basketElements[itemIndex].amount++;
      this._basketElements[itemIndex].price = itemPrice * this._basketElements[itemIndex].amount;
    }

    return this._basketElements[itemIndex].amount;
  }

  decreaseTheAmount(itemId: string): number {
    const itemIndex: number = this.getItemIndex(itemId);

    if (this._basketElements[itemIndex].amount <= 1) {
      this._basketElements.splice(itemIndex, 1)
    } else {
      let itemPrice: number = this._basketElements[itemIndex].price / this._basketElements[itemIndex].amount;
      this._basketElements[itemIndex].amount--;
      this._basketElements[itemIndex].price = itemPrice * this._basketElements[itemIndex].amount;
    }

    return this._basketElements[itemIndex].amount;
  }

  get basketElements(): Basket {
    return this._basketElements;
  }

  get summaryPrice(): number {
    return this._summaryPrice;
  }

  resetBasket(): void {
    this._basketElements = [];
  }
}
