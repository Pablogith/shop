import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrdersService} from "../../../../core/http/orders/orders.service";
import {IOrder} from "../../../../shared/models/IOrder";
import {ApiService} from "../../../../core/http/api/api.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderId: string;
  order: IOrder;

  orderProductsId: string[] = [];
  orderProducts: object[] = [];

  constructor(
    private apiService: ApiService,
    private orderService: OrdersService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.orderId = params.id;
    });

    this.orderService.getOrder(this.orderId).subscribe(
      result => {
        this.order = result.data;
        this.orderProductsId = result.data.products;
        this.orderProductsId.forEach(productId => {
          this.orderService.getProductFromOrder(productId).subscribe(
            result => {
              this.orderProducts.push(result.data);
            },
            error => {
              console.log(error);
            }
          );
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  get name(): string | undefined {
    return this.order?.name;
  }

  get surname(): string | undefined {
    return this.order?.surname;
  }

  get email(): string | undefined {
    return this.order?.email;
  }

  get homeNumber(): string | undefined {
    return this.order?.homeNumber;
  }

  get place(): string | undefined {
    return this.order?.place;
  }

  get street(): string | undefined {
    return this.order?.street;
  }

  get paymentMethod(): string | undefined {
    return this.order?.paymentMethod;
  }

  get createdAt(): string | undefined {
    return this.order?.createdAt;
  }

  get price(): number | string | undefined {
    return this.order?.price;
  }

}
