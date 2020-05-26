import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IItem} from "../../../../core/models/item.model";
import {Currencies} from "../../../../core/models/currencies";

const description: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
  'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown' +
  'printer took a galley of type and scrambled it to make a type specimen book. It has survived not ' +
  'only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ';

export const items: Array<IItem> = [
  {
    id: 1,
    image: 'https://files.r.worldssl.net/vendita/74029-large_default/grid-1x1-sospensione-pablo.jpg',
    name: 'Something',
    price: 12.99,
    currency: Currencies.PLN,
    description: description
  },
  {
    id: 2,
    image: 'https://files.r.worldssl.net/vendita/74029-large_default/grid-1x1-sospensione-pablo.jpg',
    name: 'Something',
    price: 12.99,
    currency: Currencies.PLN,
    description: description
  },
  {
    id: 3,
    image: 'https://files.r.worldssl.net/vendita/74029-large_default/grid-1x1-sospensione-pablo.jpg',
    name: 'Something',
    price: 12.99,
    currency: Currencies.PLN,
    description: description
  },
  {
    id: 4,
    image: 'https://files.r.worldssl.net/vendita/74029-large_default/grid-1x1-sospensione-pablo.jpg',
    name: 'Something',
    price: 12.99,
    currency: Currencies.PLN,
    description: description
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
