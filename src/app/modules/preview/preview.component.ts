import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PrismicService } from '../../prismic/prismic.service';
import { Preview } from '../../prismic/preview';
import { Subscription, Observable } from 'rxjs';

const PREVIEW_EXPIRES = 30 * 60 * 1000; // 30 minutes

@Component({
  selector: 'app-preview',
  template: ''
})
export class PreviewComponent implements OnInit, OnDestroy {
  private routeStream: Subscription;

  constructor(
    private prismic: PrismicService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeStream = this.route.queryParams
    .map(params => params['token'])
    .flatMap(token => Observable.fromPromise(this.prismic.preview(token)))
    .subscribe((previewData: Preview) => {
      this.cookieService.put(previewData.cookieName, previewData.token, PREVIEW_EXPIRES);
      this.router.navigateByUrl(previewData.redirectURL);
    });
  }

  ngOnDestroy() {
    this.routeStream.unsubscribe();
  }
}
