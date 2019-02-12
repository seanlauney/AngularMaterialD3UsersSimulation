import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProductNew } from '../models/product.model';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: ProductNew;
  edit = false;
  productId: number;
  name: string;
  description: string;
  url: string;
  categoryIds: [];
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.categoryIds = [];
    if (data) {
      this.name = data.Name;
      this.description = data.Description;
      this.url = data.Url;
      this.productId = data.ProductId;
      this.edit = true;
    }
  }

  ngOnInit() {}
  addProduct() {
    const currentProduct = {
      Name: this.name,
      Description: this.description,
      Url: this.url,
      CategoryIds: this.categoryIds
    };
    this.productsService
      .addProduct(currentProduct)
      .pipe(first())
      .subscribe(newProduct => {
        this.snackBar.open('Product Added', '', {
          duration: 2000
        });
        this.router.navigateByUrl('/');
      });
  }
  updateProduct() {
    const currentProduct = {
      Name: this.name,
      Description: this.description,
      Url: this.url,
      CategoryIds: this.categoryIds
    };
    this.productsService
      .updateProduct(currentProduct, this.productId)
      .pipe(first())
      .subscribe(newProduct => {
        this.snackBar.open('Product Updated', '', {
          duration: 2000
        });
      });
  }
}
