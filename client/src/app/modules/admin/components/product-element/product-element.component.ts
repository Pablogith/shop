import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../../../../core/http/api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.scss']
})
export class ProductElementComponent implements OnInit {
  @Input() product;
  @Input() index: number;

  @Output()
  deleteProd: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private router: Router,
    private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  deleteProduct(id: string): void {
    this.apiService.deleteProduct(id).subscribe(
      response => {
        this.deleteProd.emit(this.index);
      },
      error => {
        console.log(error);
      }
    );
  }

  get id(): string {
    return this.product._id;
  }

  get category(): string {
    return this.product.category;
  }

  get name(): string {
    return this.product.name;
  }

  get price(): string {
    return this.product.price;
  }

  get currency(): string {
    return this.product.currency;
  }

}
