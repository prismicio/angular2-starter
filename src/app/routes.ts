import { Routes } from '@angular/router';
import { HelpComponent } from './modules/help/help.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/help' },
  { path: 'help', component: HelpComponent}
];
