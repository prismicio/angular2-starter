import { Routes } from '@angular/router';
import { HelpComponent } from './modules/help/help.component';
import { PreviewComponent } from './modules/preview/preview.component';
import { PageComponent } from './modules/page/page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/help' },
  { path: 'page/:uid', component: PageComponent},
  { path: 'help', component: HelpComponent},
  { path: 'preview', component: PreviewComponent }
];
