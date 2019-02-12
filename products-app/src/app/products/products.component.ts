import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { first } from 'rxjs/operators';
import { Product } from '../models/product.model';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService.getProducts().pipe(first()).subscribe(products => {
      this.products = products;
    });
  }
}
