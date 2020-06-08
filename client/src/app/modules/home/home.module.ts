import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './components/home/home.component';
import {RecentlyViewedProductsComponent} from "./components/recently-viewed-products/recently-viewed-products.component";


@NgModule({
  declarations: [
    HomeComponent,
    RecentlyViewedProductsComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
