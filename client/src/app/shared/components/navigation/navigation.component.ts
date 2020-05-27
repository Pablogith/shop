import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  bookmarks: Array<object> = [
    {name: 'glasses'},
    {name: 'candles'},
    {name: 'mirrors'},
    {name: 'vases'},
    {name: 'flowerpot'}
  ];

  menuIsActive: boolean = false;
  iconIsHover: boolean = false;

  toggleMenu(): void {
    this.menuIsActive = !this.menuIsActive;
  }

  hiddenMenu(): void {
    this.menuIsActive = false;
  }

  ngOnInit(): void {
  }

}
