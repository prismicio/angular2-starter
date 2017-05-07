import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // required for ngIf templating property
import { CookieService } from 'ngx-cookie';
import { PreviewComponent } from './preview.component';
import { PrismicService } from '../../prismic/prismic.service';

@NgModule({
  declarations: [PreviewComponent],
  exports: [PreviewComponent],
  providers: [PrismicService, CookieService]
})
export class PreviewModule {}
