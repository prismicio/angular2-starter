import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // required for ngIf templating property
import { HelpComponent } from './help.component';
import { PrismicService } from '../../prismic/prismic.service';

@NgModule({
  declarations: [HelpComponent],
  imports: [CommonModule],
  exports: [HelpComponent],
  providers: [PrismicService]
})
export class HelpModule { }
