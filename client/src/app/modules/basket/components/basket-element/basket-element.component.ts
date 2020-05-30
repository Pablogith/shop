import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

import {IProduct} from "../../../../shared/models/IProduct";
import {IProductInformation} from "../../../../shared/models/IBasket";
import {ApiService} from "../../../../core/http/api/api.service";
import {BasketService} from "../../../../core/services/basket/basket.service";

@Component({
  selector: 'basket-element',
  templateUrl: './basket-element.component.html',
  styleUrls: ['./basket-element.component.scss']
})
export class BasketElementComponent implements OnInit {
  @Input() productData: IProductInformation;

  product: IProduct;

  counterForm: FormGroup = new FormGroup({
    counter: new FormControl('1', [
      Validators.required,
      Validators.min(1),
      Validators.max(5)
    ])
  });


  constructor(private apiService: ApiService, private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.counter.disable();

    this.apiService.getProducts(this.productData._id).subscribe((product: IProduct) => {
      this.product = product;
    });

    this.setCounter(this.productData.amount);
  }

  add(): void {
    this.basketService.increaseTheAmount(this.product._id);
  }

  remove(): void {
    this.basketService.decreaseTheAmount(this.product._id);
  }

  get counter(): AbstractControl {
    return this.counterForm.get('counter');
  }

  setCounter(number: number): void {
    this.counterForm.controls['counter'].setValue(number);
  }

}
