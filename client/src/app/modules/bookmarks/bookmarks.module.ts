import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookmarksRoutingModule} from './bookmarks-routing.module';
import {BookmarkComponent} from './components/bookmark/bookmark.component';
import {ItemComponent} from './components/item/item.component';
import {MatIconModule} from "@angular/material/icon";
import {ItemDetailsComponent} from './components/item-details/item-details.component';


@NgModule({
  declarations: [BookmarkComponent, ItemComponent, ItemDetailsComponent],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    MatIconModule
  ]
})
export class BookmarksModule {
}
