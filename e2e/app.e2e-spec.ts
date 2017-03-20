import { Max8Page } from './app.po';

describe('max8 App', () => {
  let page: Max8Page;

  beforeEach(() => {
    page = new Max8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
