import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
    <span class='navbar-brand'   style='margin-left: 100px;'>{{pageTitle}}</span>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>

  `,
})
export class AppComponent {
  pageTitle: string = 'Gupta Product Management';
}
