import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../core/http/api/api.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {categories} from "../../../../shared/models/categories";
import {Currencies} from "../../../../shared/models/currencies"
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  categories = categories;

  addForm: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
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
        Validators.maxLength(320)
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

  get name(): AbstractControl {
    return this.addForm.get('name');
  }

  get price(): AbstractControl {
    return this.addForm.get('price');
  }

  get description(): AbstractControl {
    return this.addForm.get('description');
  }

  get image(): AbstractControl {
    return this.addForm.get('image');
  }

  get category(): AbstractControl {
    return this.addForm.get('category');
  }

  onSubmit(): void {
    const newProduct = this.addForm.value;
    newProduct.currency = Currencies.PLN;

    this.apiService.createProduct(newProduct).subscribe(
      result => {
        this.snackBar.open('Product created', '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['snackBar--success']
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
    )
  }

}
