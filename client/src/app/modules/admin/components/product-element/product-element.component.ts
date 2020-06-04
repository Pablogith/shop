import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.scss']
})
export class ProductElementComponent implements OnInit {
  @Input() product;

  constructor() {
  }

  ngOnInit(): void {
  }

}
