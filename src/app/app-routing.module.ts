import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { appRoutes } from 'src/routes';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SelectiveStrategy } from './selective-strategy.service';



@NgModule({

imports: [
RouterModule.forRoot(appRoutes , {preloadingStrategy: SelectiveStrategy}) // , {enableTracing: true}


],

declarations : [ WelcomeComponent,
    PageNotFoundComponent,

],

    exports: [RouterModule] ,

providers : [SelectiveStrategy]



})

export class AppRoutingModule {
}
