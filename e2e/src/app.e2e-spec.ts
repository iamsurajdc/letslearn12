import { LetslearnPage } from '../../e2e/src/app.po';

describe('letslearn App', () => {
  let page: LetslearnPage;

  beforeEach(() => {
    page = new LetslearnPage();
  });

  it('should display Title Letslearn', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Letslearn');
  });

  it('should click three times and reset with matching points', () => {
    page.navigateTo();

    expect(page.getPoints()).toBe('1');

    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();

    expect(page.getPoints()).toBe('4');

    page.getResetButton().click();

    expect(page.getPoints()).toBe('0');
  });
});