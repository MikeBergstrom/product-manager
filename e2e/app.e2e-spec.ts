import { ProductPage } from './app.po';

describe('product App', () => {
  let page: ProductPage;

  beforeEach(() => {
    page = new ProductPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
