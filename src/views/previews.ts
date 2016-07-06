import { Component, Inject, OnInit } from '@angular/core';
import { PrismicService } from 'src/core/prismic';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  template: ''
})
export class PreviewComponent implements OnInit {
  private sub: any;

  constructor(
    private router: Router,
    private prismicService: PrismicService
  ) {}

  ngOnInit() {
    this.sub = this.router
      .routerState
      .queryParams
      .subscribe(params => {
        let token = decodeURIComponent(params['token']);
        this.prismicService.preview(token).then((url) => {
          this.router.navigate([url]);
        });
      });
  }

}
