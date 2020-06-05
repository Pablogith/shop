import {Component, OnInit} from '@angular/core';
import {OrdersService} from "../../../../core/http/orders/orders.service";
import {IOrder} from "../../../../shared/models/IOrder";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[];
  message: string;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.ordersService.getAllOrders().subscribe(
      result => {
        console.log(result);
        this.orders = result.data;
      },
      error => {
        this.message = error.message;
      }
    );
  }
}
