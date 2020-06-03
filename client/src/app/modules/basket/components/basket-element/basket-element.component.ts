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


  constructor(
    private apiService: ApiService,
    private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.counter.disable();

    this.apiService.getProduct(this.productData._id, this.productData.category).subscribe((product: any) => {
      this.product = product.data;
    });

    this.setCounter(this.productData.amount);
  }

  add(id: string): void {
    let amount = this.basketService.increaseTheAmount(id);
    this.setCounter(amount);
  }

  remove(id: string): void {
    let amount = this.basketService.decreaseTheAmount(id);
    this.setCounter(amount);
  }

  get counter(): AbstractControl {
    return this.counterForm.get('counter');
  }

  setCounter(number: number): void {
    this.counterForm.controls['counter'].setValue(number);
  }
}
