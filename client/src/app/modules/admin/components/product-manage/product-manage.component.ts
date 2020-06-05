import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../core/http/api/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss']
})
export class ProductManageComponent implements OnInit {
  products: object[];

  constructor(
    private snackBar: MatSnackBar,
    private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe(
      result => {
        this.products = result.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteFromList(valueEmitted: number): void {
    this.products.splice(valueEmitted, 1);
    this.snackBar.open('Product deleted', '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snackBar--success']
    });
  }

}
