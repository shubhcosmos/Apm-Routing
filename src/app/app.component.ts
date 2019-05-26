import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Router , Event , NavigationStart , NavigationEnd , NavigationError , NavigationCancel } from '@angular/router';
import { slideInAnimation } from './app.animation';
import { MessageService } from './messages/message.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {

  pageTitle = 'Acme Product Management';
  loading = true ;
  msgDisplay = 'Show Messages' ;

  get isDisplayed(): boolean {
    return this.messageservice.isDisplayed;
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService , private router: Router , private messageservice: MessageService) {
this.router.events.subscribe((routerEvent: Event) => {
this.checkRouterEvent(routerEvent) ;
});
  }

  checkRouterEvent(routerEvent: Event) {

    if (routerEvent instanceof NavigationStart) {
      this.loading = true;

    }

    if (routerEvent instanceof NavigationError || routerEvent instanceof NavigationCancel
      || routerEvent instanceof NavigationEnd ) {
      this.loading = false;

    }
  }

  displayMessages() {
this.router.navigate([{outlets: {popup: ['messages']}}]) ;
this.messageservice.isDisplayed = true ;
// this.msgDisplay = 'Hide Messages' ;



  }

  hideMessages() {

    this.messageservice.isDisplayed = false ;
    this.router.navigate([{outlets: {popup : null}}]) ;
      }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
    this.router.navigate(['/welcome']);
  }
}
