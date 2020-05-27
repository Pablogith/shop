import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

import {IItem} from "../../../../shared/models/item.model";
import {items} from "../bookmark/bookmark.component";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  counterForm: FormGroup = new FormGroup({
    counter: new FormControl('1', [
      Validators.required,
      Validators.min(1),
      Validators.max(5)
    ])
  });

  constructor(private activatedRoute: ActivatedRoute) {
  }

  item: IItem;
  productId: number;
  _counter: number = 1;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.productId;
    });

    this.productId = +this.productId;
    this.item = items.find((item: IItem) => item.id === this.productId);

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
    return this.item.name;
  }

  get price(): number {
    return this.item.price;
  }

  get currency(): string {
    return this.item.currency;
  }

  get image(): string {
    return this.item.image;
  }

  get description(): string {
    return this.item.description;
  }
}
