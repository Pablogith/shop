import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

import {IProduct} from "../../../../shared/models/IProduct";
import {ApiService} from "../../../../core/http/api/api.service";

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

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
  }

  product: IProduct;
  productId: string;
  _counter: number = 1;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.productId;
    });

    this.apiService.getProducts(this.productId).subscribe((product: IProduct) => {
      this.product = product;
    });

    this.counter.disable();
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

  get name(): string {
    return this.product.name;
  }

  get price(): number {
    return this.product.price;
  }

  get currency(): string {
    return this.product.currency;
  }

  get imgUrl(): string {
    return this.product.image;
  }

  get description(): string {
    return this.product.description;
  }
}
