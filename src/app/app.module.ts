import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {PrismicService} from './prismic';
import {Home} from './home/home';
import {Document} from './document/document';

// Use the endpoint of your repository
const ENDPOINT = 'https://your-repo-name.prismic.io/api';
// Specify an access token if your API is set to private
const ACCESS_TOKEN = null;
// Customize this to match your routing pattern
function linkResolver(doc: any) {
  return `/${doc.type}/${doc.id}`;
}

@NgModule({
  declarations: [AppComponent, Document, Home],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [
    PrismicService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: 'PrismicEndpoint', useValue: ENDPOINT },
    { provide: 'PrismicAccessToken', useValue: ACCESS_TOKEN },
    { provide: 'LinkResolver', useValue: linkResolver }
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
