import { PLATFORM_DIRECTIVES } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig }  from '@angular/router';

import { HomePage } from './home';
import { ProjectsPage } from './projects';


const routes: RouterConfig = [
  {path: '', component: HomePage},
  {path: 'projects', component: ProjectsPage}
];


export const ROUTER_PROVIDERS = [
  provideRouter(routes),
  {provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];
