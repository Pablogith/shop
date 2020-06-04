import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {OrdersComponent} from './components/orders/orders.component';
import {ProductManageComponent} from './components/product-manage/product-manage.component';
import {ProductElementComponent} from './components/product-element/product-element.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [DashboardComponent, OrdersComponent, ProductManageComponent, ProductElementComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule {
}
