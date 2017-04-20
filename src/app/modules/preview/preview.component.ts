import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrismicService } from '../../prismic/prismic.service';

const PREVIEW_EXPIRES = 30 * 60 * 1000; // 30 minutes

@Component({
  selector: 'app-preview',
  template: ''
})
export class PreviewComponent implements OnInit, OnDestroy {
  private routeStream: any;

  constructor(
    private prismic: PrismicService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeStream = this.route.queryParams.subscribe(params => {
      const token = params['token'];
      this.prismic.preview(token).then(previewData => {
        this.cookieService.put(previewData.name, previewData.token, PREVIEW_EXPIRES);
        this.router.navigateByUrl(previewData.url);
      });
    });
  }

  ngOnDestroy() {
    this.routeStream.unsubscribe();
  }
}
