import { Component, Input, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrismicService } from '../prismic';

@Component({
  selector: 'document',
  styleUrls: ['./document.css'],
  templateUrl: './document.html'
})
export class Document implements OnInit {
  @Input() id: string;
  private sub: any;
  private document: any;
  private loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prismic: PrismicService,
    @Inject('LinkResolver') private linkResolver: {(doc: any): string}
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.prismic.api().then((api) => api.getByID(id)).then((document) => {
        this.document = document;
        this.loaded = true;
      });
    })
  }

}
