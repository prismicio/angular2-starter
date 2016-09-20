import {Routes} from '@angular/router';
import {Home} from './home/home';
import {Document} from './document/document';

export const rootRouterConfig: Routes = [
  {path: '', component: Home},
  {path: ':type/:id', component: Document}
];
