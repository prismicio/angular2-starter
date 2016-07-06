import { Injectable, Inject } from '@angular/core';

import { Prismic } from 'prismic.io';

@Injectable()
export class PrismicService {
  constructor(
    @Inject('PrismicEndpoint') private endpoint: string,
    @Inject('PrismicAccessToken') private accessToken: string
  ) {}

  api(): Promise<any> {
    return Prismic.api(this.endpoint, {
      accessToken: this.accessToken
    });
  }

}
