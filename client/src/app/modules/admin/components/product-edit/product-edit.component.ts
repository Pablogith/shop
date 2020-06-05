import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../../core/http/api/api.service";
import {IProduct} from "../../../../shared/models/IProduct";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {categories} from "../../../../shared/models/categories";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  categories = categories;

  productId: string;
  category: string;

  product: IProduct;
  editForm: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.productId = params['id'];
      this.category = params['category'];
    });

    this.apiService.getProduct(this.productId, this.category).subscribe(
      result => {
        this.product = result.data;
        this.setDefaultProductData();
      },
      error => {
        console.log(error);
      }
    );

    this.editForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]
      ],
      price: ['', [
        Validators.required,
        Validators.min(1),
        Validators.max(5000)
      ]
      ],
      description: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]
      ],
      image: ['', [
        Validators.required,
        Validators.minLength(3)
      ]
      ],
      category: ['', [
        Validators.required
      ]
      ]
    });
  }

  onSubmit(): void {
    const updateProd = this.editForm.value;

    updateProd.currency = this.product.currency;

    this.apiService.editProduct(this.productId, updateProd).subscribe(
      result => {
        console.log(result);
        this.snackBar.open('Update product', '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['snackBar--positive']
        });
      },
      error => {
        console.log(error);
        this.snackBar.open(`${error.name.msg}`, '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['snackBar--failed']
        });
      }
    );
  }

  setDefaultProductData(): void {
    this.editForm.get('name').setValue(this.product?.name);
    this.editForm.get('price').setValue(+this.product?.price);
    this.editForm.get('description').setValue(this.product?.description);
    this.editForm.get('image').setValue(this.product?.image);
    this.editForm.get('category').setValue(this.product?.category);
  }
}
