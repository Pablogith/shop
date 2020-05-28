import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../../shared/models/IProduct";

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  products: Array<IProduct>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
