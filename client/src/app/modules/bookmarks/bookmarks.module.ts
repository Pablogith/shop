import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

import {BookmarksRoutingModule} from './bookmarks-routing.module';
import {BookmarkComponent} from './components/bookmark/bookmark.component';
import {ItemComponent} from './components/product/product.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {FilterBarComponent} from './components/filter-bar/filter-bar.component';
import {SearchComponent} from './components/search/search.component';
import {FilterByPriceComponent} from './components/filter-by-price/filter-by-price.component';
import { SortProductsComponent } from './components/sort-products/sort-products.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewComponent } from './components/review/review.component';
import { AddReviewComponent } from './components/add-review/add-review.component';


@NgModule({
  declarations: [
    BookmarkComponent,
    ItemComponent,
    ProductDetailsComponent,
    FilterBarComponent,
    SearchComponent,
    FilterByPriceComponent,
    SortProductsComponent,
    ReviewsComponent,
    ReviewComponent,
    AddReviewComponent
  ],
  imports: [
    BookmarksRoutingModule,
    SharedModule
  ]
})
export class BookmarksModule {
}
