import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

import {BookmarksRoutingModule} from './bookmarks-routing.module';
import {BookmarkComponent} from './components/bookmark/bookmark.component';
import {ItemComponent} from './components/item/item.component';
import {ItemDetailsComponent} from './components/item-details/item-details.component';


@NgModule({
  declarations: [BookmarkComponent, ItemComponent, ItemDetailsComponent],
  imports: [
    BookmarksRoutingModule,
    SharedModule
  ]
})
export class BookmarksModule {
}
