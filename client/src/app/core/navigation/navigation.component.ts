import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  menuIsActive: boolean = false;
  iconIsHover: boolean = false;

  toggleMenu(): void {
    this.menuIsActive = !this.menuIsActive;
  }

  ngOnInit(): void {
  }

}
