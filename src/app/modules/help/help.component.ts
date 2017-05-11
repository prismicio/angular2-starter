import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { PrismicService } from '../../prismic/prismic.service';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements AfterViewInit {
  repositoryInfos: Object;

  constructor(private prismic: PrismicService, private el: ElementRef, private highlightService : HighlightJsService) {
    prismic.validateOnboarding();
    this.repositoryInfos = prismic.getRepositoryInfos();
  }

  ngAfterViewInit() {        
    const codeElements = this.el.nativeElement.querySelectorAll('pre code');
    if(codeElements) {
      codeElements.forEach(code => {
        this.highlightService.highlight(code);
      });
    }
  }

  goToAnchor(anchor: string): void {
    window.location.hash = anchor;
  }
}
