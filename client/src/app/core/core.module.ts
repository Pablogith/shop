import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./http/api/api.service";


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ]
})
export class CoreModule {
}
