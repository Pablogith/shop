import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

import {IProduct} from "../../../../shared/models/IProduct";

@Component({
  selector: 'basket-element',
  templateUrl: './basket-element.component.html',
  styleUrls: ['./basket-element.component.scss']
})
export class BasketElementComponent implements OnInit {
  @Input() productData: IProduct;

  counterForm: FormGroup = new FormGroup({
    counter: new FormControl('1', [
      Validators.required,
      Validators.min(1),
      Validators.max(5)
    ])
  });

  _counter: number = 1;

  constructor() {
  }

  ngOnInit(): void {
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

}
