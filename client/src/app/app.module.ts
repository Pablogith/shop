import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HomeModule} from "./modules/home/home.module";
import {BookmarksModule} from "./modules/bookmarks/bookmarks.module";
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {BasketModule} from "./modules/basket/basket.module";
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavigationComponent} from './core/navigation/navigation.component';
import {FooterComponent} from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    BookmarksModule,
    BasketModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
