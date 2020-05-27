import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BasketRoutingModule} from './basket-routing.module';
import {BasketComponent} from './components/basket/basket.component';
import {BasketElementComponent} from "./components/basket-element/basket-element.component";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BasketComponent,
    BasketElementComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class BasketModule {
}
