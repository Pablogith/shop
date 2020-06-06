import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../../shared/models/IProduct";
import {Currencies} from "../../../../shared/models/currencies";
import {ActivatedRoute} from "@angular/router";
import {BasketService} from "../../../../core/services/basket/basket.service";
import {IProductInformation} from "../../../../shared/models/IBasket";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'bookmark-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() productData: IProduct;

  bookmark: string;

  constructor(
    private snackBar: MatSnackBar,
    private basketService: BasketService,
    private activatedRoute: ActivatedRoute) {
  }

  isFavourite: boolean = false;

  shoppingButtonIsHover: boolean = false;
  favoriteButtonIsHover: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookmark = params.bookmark;
    });
  }

  addToBasket(event: Event, id: string): void {
    event.preventDefault();
    event.stopPropagation();

    const newItem: IProductInformation = {
      _id: id,
      category: this.productData.category,
      amount: 1,
      price: this.price
    };

    this.basketService.addToBasket(newItem);

    this.snackBar.open(`Buy ${this.toTitleCase(this.productData.name)}`, '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snackBar--positive']
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

  toTitleCase(word: string): string {
    return word.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
}
