import { Component } from '@angular/core';

@Component({
  // selector: 'pm-home', not required since we are routing and not nesting
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
}
