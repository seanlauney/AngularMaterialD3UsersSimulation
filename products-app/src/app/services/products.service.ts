import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductNew } from '../models/product.model';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly baseUrl = 'https://gdm-interview-api.azurewebsites.net';
  private productDummy = {
    Name: 'fake',
    Description: 'Some Description',
    Url: 'google.com',
    CategoryIds: [
      1
    ]
  };
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(`${this.baseUrl}/api/v1/Products`);
  }
  getProduct(productId: number) {
    return this.http.get<Product[]>(`${this.baseUrl}/api/v1/Products/${productId}`);
  }

  addProduct(product: ProductNew) {
    return this.http.post<ProductNew>(`${this.baseUrl}/api/v1/Products`,
      product
    );
  }
  updateProduct(product: ProductNew, productId: number) {
    return this.http.put<ProductNew>(`${this.baseUrl}/api/v1/Products/${productId}`,
      product
    );
  }
}

