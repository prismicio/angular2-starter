import { Component } from '@angular/core';
import { PrismicService } from 'src/core/prismic'
import { Observable } from 'rxjs/Observable';
import { PrismicListComponent } from './document-list';


@Component({
  selector: 'home',
  directives: [
    PrismicListComponent
  ],
  template: `
    <h2>Home</h2>
    <ul>
      <li class="document" *ngFor="let document of documents">{{document.slug}}</li>
    </ul>
  `
})
export class HomePage {
  documents: Array<any>;
  constructor(public prismicService: PrismicService) {
    prismicService.api().then((api) => api.query('')).then((response) => {
      this.documents = response.results;
    });
  }
}
