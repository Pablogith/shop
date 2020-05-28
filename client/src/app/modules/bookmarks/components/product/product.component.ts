import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../../shared/models/IProduct";
import {Currencies} from "../../../../shared/models/currencies";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bookmark-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() productData: IProduct;

  bookmark: string;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  isFavourite: boolean = false;

  shoppingButtonIsHover: boolean = false;
  favoriteButtonIsHover: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookmark = params.bookmark;
    });
  }

  get price(): number {
    return this.productData.price;
  }

  get name(): string {
    return this.productData.name;
  }

  get currency(): Currencies {
    return this.productData.currency;
  }

  get image(): string {
    return this.productData.image;
  }

  get id(): string {
    return this.productData._id;
  }

}
