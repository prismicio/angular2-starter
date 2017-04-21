export interface Context {
  api: any;
  endpoint: string;
  accessToken?: string;
  linkResolver: Function;
  toolbar: Function;
};
