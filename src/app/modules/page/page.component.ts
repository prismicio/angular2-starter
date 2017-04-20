import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { PrismicContext } from '../../prismic/prismic-context';
import { PrismicService } from '../../prismic/prismic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnDestroy {
  private routeStream: any;

  ctx ?: PrismicContext;
  pageContent ?: any;

  constructor(private prismic: PrismicService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeStream = this.route.params.subscribe(params => {
      const uid = params['uid'];
      this.prismic.buildContext()
      .then((ctx: PrismicContext) => {
        this.ctx = ctx;
        this.fetchPage(uid);
      });
    });
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
