import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HomeModule} from "./modules/home/home.module";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './core/navigation/navigation.component';
import {FooterComponent} from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
