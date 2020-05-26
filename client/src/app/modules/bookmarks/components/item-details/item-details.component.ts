import {Component, OnInit} from '@angular/core';
import {IItem} from "../../../../core/models/item.model";

import {items} from "../bookmark/bookmark.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  item: IItem;
  productId: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.productId;
    });

    this.productId = +this.productId;

    this.item = items.find((item: IItem) => item.id === this.productId);
  }

  get name(): string {
    return this.item.name;
  }

  get price(): number {
    return this.item.price;
  }

}
