import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";

@Component({
  selector: 'basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {

  inputChecked: boolean = false;

  order: FormGroup = new FormGroup({
    paymentType: new FormControl(''),
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

  changeChecked(event: Event): void {
    event.preventDefault();
    this.inputChecked = !this.inputChecked;
  }

  onSubmit(): void {
    console.log(this.order);
  }

  get paymentType(): AbstractControl {
    return this.order.get('paymentType');
  }

  get street(): AbstractControl {
    return this.order.get('street');
  }

  get email(): AbstractControl {
    return this.order.get('email');
  }

  get homeNumber(): AbstractControl {
    return this.order.get('homeNumber');
  }

  get place(): AbstractControl {
    return this.order.get('place');
  }

  get name(): AbstractControl {
    return this.order.get('name');
  }

  get surname(): AbstractControl {
    return this.order.get('surname');
  }

}
