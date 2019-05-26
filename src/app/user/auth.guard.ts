import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, UrlSegment, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , CanLoad {
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (this.authservice.isLoggedIn) {
      return true;
    }
    this.authservice.redirectUrl = route.path ;
this.router.navigate(['/login']) ;
return false ;
  }
/**
 *
 */
constructor(private authservice: AuthService , private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authservice.isLoggedIn) {
      return true;
    }
    this.authservice.redirectUrl = state.url ;
this.router.navigate(['/login']) ;
return false ;
  }
}
