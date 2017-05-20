import { Directives2Page } from './app.po';

describe('directives2 App', () => {
  let page: Directives2Page;

  beforeEach(() => {
    page = new Directives2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
