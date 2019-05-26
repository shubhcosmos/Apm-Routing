import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute, Router, ResolveData } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;
  constructor(private productService: ProductService, private actiRoute: ActivatedRoute , private router: Router) { }
  ngOnInit(): void {
const resolveddata: ResolveData = this.actiRoute.snapshot.data['product'];

this.errorMessage = resolveddata.error;
this.onProductRetrieved(resolveddata.product) ;
  }

  edit() {
    const id = +this.actiRoute.snapshot.paramMap.get('id');
this.router.navigate(['/products' , id , 'edit']);

  }

  goBack() {
this.router.navigate(['/products'] , {queryParamsHandling: 'preserve'}) ;
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.onProductRetrieved(product),
      error => this.errorMessage = <any>error);
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
