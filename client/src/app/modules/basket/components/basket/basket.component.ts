import {Component, OnInit} from '@angular/core';
import {IItem} from "../../../../shared/models/item.model";
import {Currencies} from "../../../../shared/models/currencies";

@Component({
  selector: 'basket',
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
      description: "something",
      image: 'https://files.r.worldssl.net/vendita/74029-large_default/grid-1x1-sospensione-pablo.jpg'
    },
    {
      name: 'any item',
      id: 2,
      currency: Currencies.EUR,
      price: 2.99,
      description: "something",
      image: 'https://files.r.worldssl.net/vendita/74029-large_default/grid-1x1-sospensione-pablo.jpg'
    }
  ];

  ngOnInit(): void {
  }

}
