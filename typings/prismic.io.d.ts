// Type definitions for prismic.io JS kit 3.1.3

declare namespace PrismicIO {

  interface Callback {
    (err: any, result: any): any
  }

  // TODO
  type Response = any

  // TODO
  type Document = any

  interface Api {
    accessToken?: string;
    url: string;
    apiCache: any;
    apiDataTTL: number;
    form: {(formId: string): any};
    master: {(): string};
    ref: {(label: string): any};
    query: {(q: string, options?: Object, callback?: Callback): PromiseLike<Response>};
    getByID: {(id: string, options?: Object, callback?: Callback): PromiseLike<Document>};
    getByUID: {(typ: string, uid: string, options?: Object, callback?: Callback): PromiseLike<Document>};
  }

  interface ApiOptions {
    callback?: Callback,
    accessToken?: string,
    req?: any,
    requestHandler?: any,
    apiCache?: any,
    apiDataTTL?: number
  }

  interface Prismic {
    api: {(url: string, options?: ApiOptions): PromiseLike<Api>},
    Predicates: any
  }

}

declare module "prismic.io" {
  export let Prismic: any;
}
