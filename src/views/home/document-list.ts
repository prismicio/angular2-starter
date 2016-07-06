import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'document-list',
  template: `
    <ul>
      <li class="document" *ngFor="let documents of document | async">{{document.slug}}</li>
    </ul>
  `
})

export class PrismicListComponent {
  @Input() documents: any[];
}
