import { Component } from '@angular/core';


@Component({
  selector: 'app',
  template: `
    <header>
      <a [routerLink]="['/']">Home</a> | <a [routerLink]="['/projects']">Projects</a>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})

export class App {}
