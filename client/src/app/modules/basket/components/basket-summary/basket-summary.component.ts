import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";

@Component({
  selector: 'basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {

  order: FormGroup = new FormGroup({
    paymentType: new FormControl('', [
      Validators.required
    ]),
    street: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    homeNumber: new FormControl('', [
      Validators.required
    ]),
    place: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3)
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3)
    ]),
    surname: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3)
    ])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.order);
  }

  get paymentType(): AbstractControl {
    return this.order.get('paymentType');
  }

}
