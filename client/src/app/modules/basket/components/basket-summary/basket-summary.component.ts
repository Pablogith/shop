import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";
import {BasketService} from "../../../../core/services/basket/basket.service";
import {OrdersService} from "../../../../core/http/orders/orders.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {

  inputChecked: boolean = false;
  price: number = 0;

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

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private ordersService: OrdersService,
    private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.basketService.basketElements.forEach(element => this.price += element.price);
    this.price.toFixed(2);
    console.log(this.price);
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
    const basket: object = JSON.parse(JSON.stringify(this.order.value));
    const basketElements: object[] = [];

    for (let prod of this.basketService.basketElements) {
      basketElements.push({
        productId: prod._id,
        amount: prod.amount
      });
    }

    basket["products"] = basketElements;
    basket["price"] = this.price;

    this.ordersService.createOrder(basket).subscribe(
      result => {
        if (result.success == true) {
          console.log('Everything is good');
          this.router.navigate(['basket/success']).then(() => {
            this.basketService.resetBasket();
          });
        } else {
          console.log(result);
        }
      },
      error => {
        this.snackBar.open('Something went wrong', 'OK', {
          duration: 10000,
          verticalPosition: 'top',
          panelClass: ['snackBar--failed']
        });
        console.log(error);
      }
    );
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
