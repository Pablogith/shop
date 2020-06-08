import { Component, OnInit } from '@angular/core';
import {RecentlyViewedProductsService} from "../../../../core/services/recentlyViewedProducts/recently-viewed-products.service";

@Component({
  selector: 'recently-viewed-products',
  templateUrl: './recently-viewed-products.component.html',
  styleUrls: ['./recently-viewed-products.component.scss']
})
export class RecentlyViewedProductsComponent implements OnInit {

  recentlyProducts: object[] = [];

  constructor(private recentlyViewedProductsService: RecentlyViewedProductsService) { }

  ngOnInit(): void {
     (this.recentlyViewedProductsService.getRecentlyViewedProducts() !== null)
       ? this.recentlyProducts = this.recentlyViewedProductsService.getRecentlyViewedProducts()
       : this.recentlyProducts = [];
  }

}
