import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PrismicService } from '../../prismic/prismic.service';
import { Preview } from '../../prismic/preview';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-preview',
  template: ''
})
export class PreviewComponent implements OnInit, OnDestroy {
  private routeStream: Subscription;

  constructor(
    private prismic: PrismicService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeStream = this.route.queryParams
    .map(params => params['token'])
    .flatMap(token => Observable.fromPromise(this.prismic.preview(token)))
    .subscribe((previewData: Preview) => {
      this.router.navigateByUrl(previewData.redirectURL);
    });
  }

  ngOnDestroy() {
    this.routeStream.unsubscribe();
  }
}
