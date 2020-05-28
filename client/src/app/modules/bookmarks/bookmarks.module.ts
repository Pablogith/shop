import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

import {BookmarksRoutingModule} from './bookmarks-routing.module';
import {BookmarkComponent} from './components/bookmark/bookmark.component';
import {ItemComponent} from './components/product/product.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';


@NgModule({
  declarations: [BookmarkComponent, ItemComponent, ProductDetailsComponent],
  imports: [
    BookmarksRoutingModule,
    SharedModule
  ]
})
export class BookmarksModule {
}
