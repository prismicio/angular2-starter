import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // required for ngIf templating property
import { RouterModule } from '@angular/router';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { HelpComponent } from './help.component';
import { PrismicService } from '../../prismic/prismic.service';
import { routes } from '../../routes';

@NgModule({
  declarations: [HelpComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), HighlightJsModule],
  exports: [HelpComponent],
  providers: [PrismicService, HighlightJsService]
})
export class HelpModule { }
