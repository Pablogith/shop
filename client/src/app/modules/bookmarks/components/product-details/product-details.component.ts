import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

import {IProduct} from "../../../../shared/models/IProduct";
import {IProductInformation} from "../../../../shared/models/IBasket";
import {ApiService} from "../../../../core/http/api/api.service";
import {BasketService} from "../../../../core/services/basket/basket.service";

@Component({
  selector: 'bookmark-item-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  counterForm: FormGroup = new FormGroup({
    counter: new FormControl('1', [
      Validators.required,
      Validators.min(1),
      Validators.max(5)
    ])
  });

  constructor(
    private basketService: BasketService,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService) {
  }

  product: IProduct;
  productId: string;
  _counter: number = 1;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.productId;
    });

    this.apiService.getProducts(this.productId).subscribe(
      (response: Object) => {
        // @ts-ignore
        this.product = response.data;
      },
      error => {
        console.log(error);
      });

    this.counter.disable();
  }

  addToBasket(): void {
    const product: IProductInformation = {
      _id: this.product._id,
      amount: this._counter
    };

    this.basketService.addToBasket(product);
  }

  add(): void {
    this._counter++;
    if (this._counter >= 5) {
      this._counter = 5;
      this.setCounter(this._counter);
    } else {
      this.setCounter(this._counter);
    }
  }

  remove(): void {
    this._counter--;
    if (this._counter <= 0) {
      this._counter = 1;
      this.setCounter(this._counter)
    } else {
      this.setCounter(this._counter);
    }
  }

  get counter(): AbstractControl {
    return this.counterForm.get('counter');
  }

  setCounter(number: number): void {
    this.counterForm.controls['counter'].setValue(number);
  }
}
