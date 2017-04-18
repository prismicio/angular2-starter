import { Angular2StarterPage } from './app.po';

describe('angular2-starter App', () => {
  let page: Angular2StarterPage;

  beforeEach(() => {
    page = new Angular2StarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
