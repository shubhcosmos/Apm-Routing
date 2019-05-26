import { Routes } from '@angular/router';
import { WelcomeComponent } from './app/home/welcome.component';
import { ProductListComponent } from './app/products/product-list.component';
import { PageNotFoundComponent } from './app/page-not-found.component';
import { AuthGuard } from './app/user/auth.guard';


export const appRoutes: Routes = [
{path: 'products' ,
// canActivate: [AuthGuard]
// canLoad: [AuthGuard] ,
data: {preload: true} ,
loadChildren: './app/products/product.module#ProductModule'},
{path : 'welcome' , component: WelcomeComponent},
{path : '' ,  redirectTo: 'welcome' , pathMatch: 'full'},
// {path : 'products' , component: ProductListComponent},
{path : '**' ,  component: PageNotFoundComponent}
];

