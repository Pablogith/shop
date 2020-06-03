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
    paymentMethod: new FormControl('', [
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

  changeChecked(event: Event): void {
    event.preventDefault();

    const {target} = event;
    const child = (target as HTMLInputElement).children[0];
    const childValue = (child as HTMLInputElement).value;
    this.order.controls.paymentMethod.setValue(childValue);

    this.inputChecked = !this.inputChecked;
  }

  onSubmit(): void {
    console.log(this.order);
  }

  get paymentMethod(): AbstractControl {
    return this.order.get('paymentMethod');
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
