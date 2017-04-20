import { Component } from '@angular/core';
import { PrismicService } from '../../prismic/prismic.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  repositoryInfos: Object;

  constructor(prismic: PrismicService) {
    prismic.validateOnboarding();
    this.repositoryInfos = prismic.getRepositoryInfos();
  }
}
