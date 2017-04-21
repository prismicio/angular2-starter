import PrismicToolbar from 'prismic-toolbar';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import Prismic from 'prismic.io';

import { Context } from './context';
import { Preview } from './preview';
import { CONFIG } from '../../prismic-configuration';

@Injectable()
export class PrismicService {

  constructor(private http: Http) {}

  buildContext() {
    const options = {};
    return Prismic.api(CONFIG.apiEndpoint, {accessToken: CONFIG.accessToken})
      .then((api) => {
        return {
          api,
          endpoint: CONFIG.apiEndpoint,
          accessToken: CONFIG.accessToken,
          linkResolver: CONFIG.linkResolver,
          toolbar: this.toolbar,
        } as Context;
      })
      .catch(e => console.log(`Error during connection to your Prismic API: ${e}`));
  }

  validateOnboarding() {
    const repoEndpoint = CONFIG.apiEndpoint.replace('/api', '');
    const headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.post(`${repoEndpoint}/app/settings/onboarding/run`, null, headers)
    .subscribe(
      null,
      (err) => console.log(`Cannot access your repository, check your api endpoint: ${err}`)
    );
  }

  getRepositoryInfos() {
    const repoRegexp = /^(https?:\/\/([-\w]+)\.[a-z]+\.(io|dev))\/api$/;
    const [_, url, name] = CONFIG.apiEndpoint.match(repoRegexp);
    const isConfigured = name !== 'your-repo-name';
    return { url, name, isConfigured };
  }

  toolbar(api) {
    const maybeCurrentExperiment = api.currentExperiment();
    if (maybeCurrentExperiment) {
      PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
    }
    PrismicToolbar.setup(CONFIG.apiEndpoint);
  }

  preview(token) {
    return this.buildContext()
    .then(ctx => {
      return ctx.api.previewSession(token, ctx.linkResolver, '/').then((url) => {
        return {
          cookieName: Prismic.previewCookie,
          token: token,
          redirectURL: url
        } as Preview;
      });
    });
  }
}
