import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  @Output()
  searchText: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  showFilter(event: Event): void {
    // @ts-ignore
    this.searchText.emit(event);
  }

}
