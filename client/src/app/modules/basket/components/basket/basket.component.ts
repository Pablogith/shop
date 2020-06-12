import {Component, OnInit } from '@angular/core';
import {Basket} from "../../../../shared/models/IBasket";
import {BasketService} from "../../../../core/services/basket/basket.service";
import {Router} from "@angular/router";

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  products: Basket;

  constructor(
    private router: Router,
    private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.products = this.basketService.basketElements;
  }

  updateSummaryPrice(event: string): void {}
}
