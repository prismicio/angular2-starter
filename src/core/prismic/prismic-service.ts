import { Injectable, Inject } from '@angular/core';

import { Prismic } from 'prismic.io';
import * as PrismicToolbar from 'prismic-toolbar';

const PREVIEW_EXPIRES: number = 30*60*1000; // 30 minutes

@Injectable()
export class PrismicService {
  constructor(
    @Inject('PrismicEndpoint') private endpoint: string,
    @Inject('PrismicAccessToken') private accessToken: string,
    @Inject('LinkResolver') private linkResolver: {(doc: any): string}
  ) {}

  api(): Promise<any> {
    return Prismic.api(this.endpoint, {
      accessToken: this.accessToken
    });
  }

  setRef(token: string) {
    document.cookie = `${Prismic.previewCookie}=${token}; expires=${PREVIEW_EXPIRES}`;
  }

  preview(token: string): Promise<string> {
    return this.api().then((api) => {
      return api.previewSession(token, this.linkResolver, '/').then((url: string) => {
        this.setRef(token);
        PrismicToolbar.toolbar();
        return url;
      });
    });
  }

  editLink(docId: string): string {
    return PrismicToolbar.editLink(this.endpoint, docId);
  }

  editIcon(): string {
    return PrismicToolbar.editIcon;
  }

}
