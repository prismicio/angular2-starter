import { Injectable } from '@angular/core';

export interface PrismicConfiguration {
  apiEndpoint: string;
  accessToken?: string;
  linkResolver: Function;
};

export const CONFIG: PrismicConfiguration = {
  apiEndpoint: 'https://prismicio-angular2-quickstart.prismic.io/api/v2',
  linkResolver(doc) {
    if(doc.type === 'page') return `page/${doc.uid}`;
    return '/';
  }
};
