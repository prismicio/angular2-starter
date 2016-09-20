import {Component, Inject, OnInit} from '@angular/core';
import {PrismicService} from '../prismic';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home implements OnInit {
  documents: Array<any>;
  constructor(
    private prismicService: PrismicService,
    @Inject('LinkResolver') private linkResolver: {(doc: any): string}
  ) {
    prismicService.api().then((api) => api.query('')).then((response) => {
      this.documents = response.results;
    });
  }

  ngOnInit() {
    console.log("Init home!");
  }

}
