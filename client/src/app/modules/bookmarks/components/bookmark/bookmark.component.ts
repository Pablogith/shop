import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IProduct} from "../../../../shared/models/IProduct";
import {ApiService} from "../../../../core/http/api/api.service";


@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  bookmark: string;

  products: Array<IProduct> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookmark = params.bookmark;

      this.apiService.getAllProductsFromCategory(this.bookmark).subscribe(
        (response: Array<IProduct>) => {
          // @ts-ignore
          this.products = response.data;
        },
        error => {
          console.log(error);
        });
    });
  }

}
