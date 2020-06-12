import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasketComponent} from "./components/basket/basket.component";
import {SuccessOrderComponent} from "./components/success-order/success-order.component";
import {RefreshComponent} from "./components/refresh/refresh.component";


const routes: Routes = [
  {
    path: '',
    component: BasketComponent
  },
  {
    path: 'success',
    component: SuccessOrderComponent
  },
  {
    path: 'refresh',
    component: RefreshComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketRoutingModule {
}
