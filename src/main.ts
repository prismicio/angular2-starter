import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

// core
import { API_PROVIDERS } from './core/api';
import { PRISMIC_PROVIDERS } from './core/prismic';

// routes
import { ROUTER_PROVIDERS } from './views/routes';

// root component
import { App } from './views/app';

// common styles
import './views/common/styles.scss';


if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}


bootstrap(App, [
  API_PROVIDERS,
  HTTP_PROVIDERS,
  PRISMIC_PROVIDERS,
  ROUTER_PROVIDERS,
  provide('PrismicEndpoint', {useValue: 'https://your-repo-name.prismic.io/api'})
]).catch((error: Error) => console.error(error));
