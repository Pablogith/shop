import {Component, Input, OnInit} from '@angular/core';
import {IItem} from "../../../../shared/models/item.model";

@Component({
  selector: 'app-basket-element',
  templateUrl: './basket-element.component.html',
  styleUrls: ['./basket-element.component.scss']
})
export class BasketElementComponent implements OnInit {
  @Input() itemData: IItem;

  constructor() {
  }

  ngOnInit(): void {
  }

}
