import { Component, Inject } from '@angular/core';
import { PrismicService } from 'src/core/prismic';


@Component({
  selector: 'home',
  template: `
    <h2>Home</h2>
    <ul>
      <li class="document" *ngFor="let document of documents">
        <a [routerLink]="[linkResolver(document)]">{{document.slug}}</a>
      </li>
    </ul>
  `
})
export class HomePage {
  documents: Array<any>;
  constructor(
    private prismicService: PrismicService,
    @Inject('LinkResolver') private linkResolver: {(doc: any): string}
  ) {
    prismicService.api().then((api) => api.query('')).then((response) => {
      this.documents = response.results;
    });
  }
}
