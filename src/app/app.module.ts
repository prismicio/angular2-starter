import { PrismicService } from './prismic/prismic.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { HelpModule } from './modules/help/help.module';
import { PageModule } from './modules/page/page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    HelpModule,
    PageModule
  ],
  providers: [PrismicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
