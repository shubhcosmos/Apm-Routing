import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from './product-edit.component';

@Injectable({
  providedIn: 'root'
})
export class ProductEditCandeactivateGuardGuard implements CanDeactivate<ProductEditComponent> {

  canDeactivate(component: ProductEditComponent, currentRoute: ActivatedRouteSnapshot,
     currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean  {


      if (component.isDirty) {
const prodName = component.product.productName || 'New Product' ;
return confirm(`Navigate and loose Changes ${prodName} ?`) ;
      }

      return true ;
  }

}
