import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookmarkComponent} from "./components/bookmark/bookmark.component";
import {ItemDetailsComponent} from "./components/item-details/item-details.component";


const routes: Routes = [
  {
    path: ':bookmark',
    component: BookmarkComponent
  },
  {
    path: ':bookmark/:productId',
    component: ItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule {
}
