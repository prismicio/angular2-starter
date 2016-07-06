import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/delay';

import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Prismic } from 'prismic.io';

@Injectable()
export class PrismicService {
  endpoint: string;

  constructor(@Inject('PrismicEndpoint') private prismicEndpoint: string) {
    this.endpoint = prismicEndpoint;
  }

  api(): Promise<any> {
    return Prismic.api(this.endpoint);
  }

}
