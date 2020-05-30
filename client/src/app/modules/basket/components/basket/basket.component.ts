import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../../shared/models/IProduct";
import {Basket} from "../../../../shared/models/IBasket";
import {BasketService} from "../../../../core/services/basket/basket.service";

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  products: Basket;

  constructor(private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.products = this.basketService.basketElements;
  }

}
