import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookmarkComponent} from "./components/bookmark/bookmark.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";


const routes: Routes = [
  {
    path: ':bookmark',
    component: BookmarkComponent
  },
  {
    path: ':bookmark/:productId',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule {
}
