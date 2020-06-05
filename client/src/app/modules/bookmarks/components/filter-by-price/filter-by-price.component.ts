import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'filter-by-price',
  templateUrl: './filter-by-price.component.html',
  styleUrls: ['./filter-by-price.component.scss']
})
export class FilterByPriceComponent implements OnInit {
  @Output()
  getMinPrice: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  getMaxPrice: EventEmitter<number> = new EventEmitter<number>();

  minPrice: number = 1;
  maxPrice: number = 5000;

  constructor() {
  }

  ngOnInit(): void {
  }

  setMinPrice(): void {
    this.getMinPrice.emit(this.minPrice);
  }

  setMaxPrice(): void {
    this.getMaxPrice.emit(this.maxPrice);
  }

}
