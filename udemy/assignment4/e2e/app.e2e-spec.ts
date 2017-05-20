import { Assignment4Page } from './app.po';

describe('assignment4 App', () => {
  let page: Assignment4Page;

  beforeEach(() => {
    page = new Assignment4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
