import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {HomeModule} from "./modules/home/home.module";
import {BookmarksModule} from "./modules/bookmarks/bookmarks.module";
import {AppRoutingModule} from './app-routing.module';
import {BasketModule} from "./modules/basket/basket.module";

import {AppComponent} from './app.component';
import {NavigationComponent} from './shared/components/navigation/navigation.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";

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
    BookmarksModule,
    BasketModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
