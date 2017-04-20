import { Routes } from '@angular/router';
import { HelpComponent } from './modules/help/help.component';
import { PreviewComponent } from './modules/preview/preview.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/help' },
  { path: 'help', component: HelpComponent},
  { path: 'preview', component: PreviewComponent }
];
