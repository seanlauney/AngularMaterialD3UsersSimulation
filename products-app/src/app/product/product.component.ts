import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { first } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  id: number;
  product: Product[];

  private sub: any;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getProduct();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  openDialog(currentProduct): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '450px',
      data: currentProduct,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProduct();
    });
  }
  getProduct(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
      this.productsService.getProduct(this.id).pipe(first()).subscribe(product => {
        this.product = product;
      });
    });
  }
}
