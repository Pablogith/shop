import {Component, Input, OnInit} from '@angular/core';
import {IOrder} from "../../../../shared/models/IOrder";

@Component({
  selector: 'orders-element',
  templateUrl: './orders-element.component.html',
  styleUrls: ['./orders-element.component.scss']
})
export class OrdersElementComponent implements OnInit {
  @Input() order: IOrder;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.order);
  }

}
