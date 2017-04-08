import { PerFinancePage } from './app.po';

describe('per-finance App', () => {
  let page: PerFinancePage;

  beforeEach(() => {
    page = new PerFinancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
