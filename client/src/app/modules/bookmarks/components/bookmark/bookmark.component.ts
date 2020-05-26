import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IItem} from "../../../../core/models/item.model";
import {Currencies} from "../../../../core/models/currencies";

export const items: Array<IItem> = [
  {
    id: 1,
    image: 'https://files.r.worldssl.net/vendita/74029-large_default/grid-1x1-sospensione-pablo.jpg',
    name: 'Something',
    price: 12.99,
    currency: Currencies.PLN
  },
  {
    id: 2,
    image: 'https://files.r.worldssl.net/vendita/74029-large_default/grid-1x1-sospensione-pablo.jpg',
    name: 'Something',
    price: 12.99,
    currency: Currencies.PLN
  },
  {
    id: 3,
    image: 'https://files.r.worldssl.net/vendita/74029-large_default/grid-1x1-sospensione-pablo.jpg',
    name: 'Something',
    price: 12.99,
    currency: Currencies.PLN
  },
  {
    id: 4,
    image: 'https://files.r.worldssl.net/vendita/74029-large_default/grid-1x1-sospensione-pablo.jpg',
    name: 'Something',
    price: 12.99,
    currency: Currencies.PLN
  }
];

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  bookmark: string;

  items = items;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookmark = params.bookmark;
    });
  }

}
