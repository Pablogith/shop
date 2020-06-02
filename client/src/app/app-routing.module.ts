import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'bookmark',
    loadChildren: () => import('./modules/bookmarks/bookmarks.module').then(m => m.BookmarksModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./modules/basket/basket.module').then(m => m.BasketModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
