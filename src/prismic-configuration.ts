import { Injectable } from '@angular/core';

export interface PrismicConfiguration {
  apiEndpoint: String;
  accessToken?: String;
  linkResolver: Function;
};

export const CONFIG: PrismicConfiguration = {
  apiEndpoint: 'https://your-repo-name.prismic.io/api',
  linkResolver(doc) {
    return '/';
  }
};
