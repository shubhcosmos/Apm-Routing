import { Routes } from '@angular/router';
import { WelcomeComponent } from './app/home/welcome.component';
import { ProductListComponent } from './app/products/product-list.component';
import { PageNotFoundComponent } from './app/page-not-found.component';


export const appRoutes: Routes = [
{path : 'welcome' , component: WelcomeComponent},
{path : '' ,  redirectTo: 'welcome' , pathMatch: 'full'},
// {path : 'products' , component: ProductListComponent},
{path : '**' ,  component: PageNotFoundComponent}
];

