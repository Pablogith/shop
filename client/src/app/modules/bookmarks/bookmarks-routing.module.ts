import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookmarkComponent} from "./components/bookmark/bookmark.component";


const routes: Routes = [
  {
    path: ':bookmark',
    component: BookmarkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule {
}
