import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'widget-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/store" routerLinkActive="active">Shop</a>
        <a routerLink="/order/8" routerLinkActive="active">Order</a>
    </nav>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = "Widget Factory";
}