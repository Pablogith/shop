import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IProduct} from "../../../../shared/models/IProduct";
import {ApiService} from "../../../../core/http/api/api.service";

import {sortMethodType} from "../sort-products/sort-products.component";


@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  bookmark: string;

  products: IProduct[];
  productsCopy: IProduct[];

  productsNames: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookmark = params.bookmark;

      this.apiService.getAllProductsFromCategory(this.bookmark).subscribe(
        (response: IProduct[]) => {
          // @ts-ignore
          this.productsCopy = response.data;
          // @ts-ignore
          this.products = response.data;
          this.productsNames = this.products.map(prod => prod.name.toLowerCase());
        },
        error => {
          console.log(error);
        });
    });
  }

  showSearchProducts(event: Event): void {
    // @ts-ignore
    const matches = this.productsNames.filter(name => name.includes(event.toLowerCase()));
    this.products = this.productsCopy.filter(prod => matches.includes(prod.name));
  }

  setMinProductPrice(event: Event): void {
    // @ts-ignore
    this.products = this.productsCopy.filter(prod => prod.price > event);
  }

  setMaxProductPrice(event: Event): void {
    // @ts-ignore
    this.products = this.productsCopy.filter(prod => prod.price < event);
  }

  setSortMethod(event: any): void {
    const sortMethod: sortMethodType = event;
    switch (sortMethod) {
      case sortMethodType.pricesAscending:
          this.sortByPricesAscending();
        break;

      case sortMethodType.pricesDecreasing:
        this.sortByPricesDecreasing();
        break;

      case sortMethodType.newest:
        this.sortByNewest();
        break;
    }
  }

  sortByPricesAscending(): void {
    this.products.sort((a: IProduct, b: IProduct) => a.price - b.price);
  }

  sortByPricesDecreasing(): void {
    this.products.sort((a: IProduct, b: IProduct) => b.price - a.price);
  }

  sortByNewest(): void {
    this.products.sort((a: IProduct, b: IProduct) => {
      console.log(new Date(a.createdAt));
      console.log(new Date(b.createdAt));
      return Math.abs(new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    });
  }
}
