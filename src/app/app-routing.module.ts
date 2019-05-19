import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';



@NgModule({

imports: [RouterModule.forRoot(appRoutes)

],

declarations : [ WelcomeComponent,
    PageNotFoundComponent],

    exports: [RouterModule]



})

export class AppRoutingModule {
}
