import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../messages/message.service';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router, ResolveData } from '@angular/router';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

private dataIsvalid: {[key: string]: boolean} = { } ;
private currentProduct: Product ;
private originalProduct: Product ;
  constructor(private productService: ProductService,
    private messageService: MessageService , private actiRoute: ActivatedRoute , private router: Router) {

    }
  pageTitle = 'Product Edit';
  errorMessage: string;

  // product: Product;
reset() {
this.dataIsvalid = null ;
this.currentProduct = null ;
this.originalProduct = null ;

}
  get product(): Product {
return this.currentProduct ;
  }

  get isDirty(): boolean {
return JSON.stringify(this.currentProduct) !== JSON.stringify(this.originalProduct) ;
  }

  set product(value: Product) {
this.currentProduct = value ;
// spread operator used to clone
this.originalProduct = {...value};
  }

  ngOnInit(): void {
    this.actiRoute.data.subscribe(data => {
      const resolveddata: ResolveData = data['product'];

      this.errorMessage = resolveddata.error;
      this.onProductRetrieved(resolveddata.product) ;
    });


  }



  getProduct(id: number): void {
    this.productService.getProduct(id)
      .subscribe(
        (product: Product) => this.onProductRetrieved(product),
        (error: any) => this.errorMessage = <any>error
      );
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (!this.product) {
      this.pageTitle = 'No product found';
    } else {
      if (this.product.id === 0) {
        this.pageTitle = 'Add Product';
      } else {
        this.pageTitle = `Edit Product: ${this.product.productName}`;
      }
    }
  }

  deleteProduct(): void {
    if (this.product.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.product.productName} was deleted`);
    } else {
      if (confirm(`Really delete the product: ${this.product.productName}?`)) {
        this.productService.deleteProduct(this.product.id)
          .subscribe(
            () => this.onSaveComplete(`${this.product.productName} was deleted`),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  saveProduct(): void {
    if (this.isVaild()) {
      if (this.product.id === 0) {
        this.productService.createProduct(this.product)
          .subscribe(
            () => this.onSaveComplete(`The new ${this.product.productName} was saved`),
            (error: any) => this.errorMessage = <any>error
          );
      } else {
        this.productService.updateProduct(this.product)
          .subscribe(
            () => this.onSaveComplete(`The updated ${this.product.productName} was saved`),
            (error: any) => this.errorMessage = <any>error
          );
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }
    this.reset() ;
    this.router.navigate(['/products']);

    // Navigate back to the product list
  }

  validate() {
this.dataIsvalid = {};


if (this.product.productName && this.product.productName.length >= 3 && this.product.productCode ) {
this.dataIsvalid['info'] = true ;

} else {
  this.dataIsvalid['info'] = false ;

}

if (this.product.category && this.product.category.length >= 3 ) {
  this.dataIsvalid['tags'] = true ;

  } else {
    this.dataIsvalid['tags'] = false ;

  }
  }

isVaild(path?: string) {
this.validate() ;
if (path) {
return this.dataIsvalid[path] ;
}

return (this.dataIsvalid && Object.keys(this.dataIsvalid).every(d => this.dataIsvalid[d] === true));

}
}
