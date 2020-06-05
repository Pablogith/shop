import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {ProductManageComponent} from "./components/product-manage/product-manage.component";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
import {ProductAddComponent} from "./components/product-add/product-add.component";


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'product-manage',
    component: ProductManageComponent
  },
  {
    path: 'product-manage/add-product',
    component: ProductAddComponent
  },
  {
    path: 'product-manage/:category/:id',
    component: ProductEditComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
