import { Injectable, Inject } from '@angular/core';

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

  // Customize this to match your routing pattern
  linkResolver(doc: any) {
    return `/${doc.type}/${doc.id}`;
  }

}
