import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Product, ProductResolved } from './product';
import { Observable, of } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'
})

export class ProductResolver implements Resolve<ProductResolved> {

    /**
     *
     */
    constructor(private productservice: ProductService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
        const id = +route.paramMap.get('id') ;
            if (isNaN(id)) {
                const msg = 'Pruduct id is not a number ${id}';
                console.error(msg) ;
                return of({product: null , error: msg});

            }

        return  this.productservice.getProduct(id)
        .pipe(
map(product => ({product: product})),
catchError( err => {
    const msg = 'Pruduct id is not a number ' + id;
    console.error(msg) ;
    return of({product: null , error: msg});
})
         ) ;




    }



}
