import {Component, EventEmitter, OnInit, Output} from '@angular/core';

interface ISortMethod {
  value: sortMethodType;
  viewValue: string;
}

export enum sortMethodType {
  pricesAscending = 'pricesAscending',
  pricesDecreasing = 'pricesDecreasing',
  newest = 'newest',
  oldest = 'oldest'
}

@Component({
  selector: 'sort-products',
  templateUrl: './sort-products.component.html',
  styleUrls: ['./sort-products.component.scss']
})
export class SortProductsComponent implements OnInit {
  @Output()
  sortMethod: EventEmitter<sortMethodType> = new EventEmitter<sortMethodType>();

  constructor() {
  }

  sortMethods: ISortMethod[] = [
    {
      value: sortMethodType.pricesAscending,
      viewValue: 'Prices ascending'
    },
    {
      value: sortMethodType.pricesDecreasing,
      viewValue: 'Prices are decreasing'
    }
  ];

  ngOnInit(): void {
  }

  setCurrentSortMethod({event}: { event: any }): void {
    this.sortMethod.emit(event.value);
  }

}
