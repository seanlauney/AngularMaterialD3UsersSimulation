import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  spinner = true;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .getProducts()
      .pipe(first())
      .subscribe(products => {
        this.products = products;
      });
  }
  stopSpinner() {
    this.spinner = false;
  }
}
