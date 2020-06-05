import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output()
  searchText: EventEmitter<string> = new EventEmitter<string>();

  searchModel: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  search(): void {
    this.searchText.emit(this.searchModel);
  }

}
