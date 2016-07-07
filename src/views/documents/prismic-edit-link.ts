import { Component, Input } from '@angular/core';
import { PrismicService } from 'src/core/prismic';
import * as PrismicToolbar from 'prismic-toolbar';

@Component({
  selector: 'prismic-edit-link',
  template: `
    <a href={{prismic.editLink(docId)}}><img style="width:16px" target="_blank" src={{prismic.editIcon()}}/></a>
  `
})
export class PrismicEditLink {
  @Input() docId: string;
  constructor(private prismic: PrismicService) {}
}
