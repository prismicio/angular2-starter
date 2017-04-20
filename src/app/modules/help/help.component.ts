import { Component } from '@angular/core';
import { PrismicService } from '../../services/prismic';

@Component({
  selector: 'help',
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