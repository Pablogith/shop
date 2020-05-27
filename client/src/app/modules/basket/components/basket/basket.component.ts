import {Component, OnInit} from '@angular/core';
import {IItem} from "../../../../shared/models/item.model";
import {Currencies} from "../../../../shared/models/currencies";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor() {
  }

  items: Array<IItem> = [
    {
      name: 'Something',
      id: 3,
      currency: Currencies.PLN,
      price: 12.99,
      description: "something"
    }
  ];

  ngOnInit(): void {
  }

}
