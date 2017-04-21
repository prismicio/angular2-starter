import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Context } from '../../prismic/context';
import { PrismicService } from '../../prismic/prismic.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnDestroy {
  private routeStream: Subscription;

  ctx ?: Context;
  pageContent ?: any;

  constructor(private prismic: PrismicService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeStream = this.route.params
    .map(params => params['uid'])
    .flatMap(uid => Observable.fromPromise(this.prismic.buildContext()).map(ctx => [uid, ctx]))
    .subscribe(([uid, ctx]) => {
      this.ctx = ctx;
      this.fetchPage(uid);
    });
  }

  ngDoCheck() {
    if(this.ctx) this.prismic.toolbar(this.ctx.api);
  }

  ngOnDestroy() {
    this.routeStream.unsubscribe();
  }

  fetchPage(pageUID) {
    this.ctx.api.getByUID('page', pageUID, {})
    .then(data => this.pageContent = data)
    .catch(e => console.log(e));
  }
}
