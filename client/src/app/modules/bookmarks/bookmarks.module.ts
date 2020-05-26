import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookmarksRoutingModule} from './bookmarks-routing.module';
import {BookmarkComponent} from './components/bookmark/bookmark.component';


@NgModule({
  declarations: [BookmarkComponent],
  imports: [
    CommonModule,
    BookmarksRoutingModule
  ]
})
export class BookmarksModule {
}
