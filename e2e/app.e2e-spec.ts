import { NgxBcjTestPage } from './app.po';

describe('ngx-bcj-test App', () => {
  let page: NgxBcjTestPage;

  beforeEach(() => {
    page = new NgxBcjTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
