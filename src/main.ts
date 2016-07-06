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

// Use the endpoint of your repository
const ENDPOINT = 'https://your-repo-name.prismic.io/api';
// Specify an access token if your API is set to private
const ACCESS_TOKEN = null;

// Customize this to match your routing pattern
function linkResolver(doc: any) {
  return `/${doc.type}/${doc.id}`;
}

bootstrap(App, [
  API_PROVIDERS,
  HTTP_PROVIDERS,
  PRISMIC_PROVIDERS,
  ROUTER_PROVIDERS,
  provide('PrismicEndpoint', {useValue: ENDPOINT}),
  provide('PrismicAccessToken', {useValue: ACCESS_TOKEN}),
  provide('LinkResolver', {useValue: linkResolver})
]).catch((error: Error) => console.error(error));
