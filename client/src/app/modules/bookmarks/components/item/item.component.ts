import {Component, Input, OnInit} from '@angular/core';
import {IItem} from "../../../../core/models/item.model";
import {Currencies} from "../../../../core/models/currencies";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: IItem;

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
    return this.itemData.price;
  }

  get name(): string {
    return this.itemData.name;
  }

  get currency(): Currencies {
    return this.itemData.currency;
  }

  get image(): string {
    return this.itemData.image;
  }

  get id(): number {
    return this.itemData.id;
  }

}
