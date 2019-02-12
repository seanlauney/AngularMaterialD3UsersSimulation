import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AddProductComponent } from '../add-product/add-product.component';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  id: number;
  product: Product[];
  spinner = true;

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getProduct();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  openDialog(currentProduct): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '450px',
      data: currentProduct
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProduct();
    });
  }
  getProduct(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
      this.productsService
        .getProduct(this.id)
        .pipe(first())
        .subscribe((product: Product[]) => {
          this.product = product;
        });
    });
  }
  stopSpinner() {
    this.spinner = false;
  }
}
