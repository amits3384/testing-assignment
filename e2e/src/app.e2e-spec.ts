import { AppPage } from './app.po';
import { browser, logging, element, by, Button } from 'protractor';
// import { by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('LOGIN');
  });

  // This is the passed test with valid credentials
  it('should submit the form with user credentials', () => {
    element(by.className('email')).sendKeys('amit@abc.com');
    element(by.className('password')).sendKeys('amit1234');

    element(by.css('button[type="submit"]')).click();

    var result = element(by.css('app-dashboard h3')).getText()
    expect(result).toEqual('DashBoard 1')

  });

  // THIS is failed test with invalid credentials
  xit('should submit the form with user credentials', () => {
    element(by.className('email')).sendKeys('amit@abc.com');
    element(by.className('password')).sendKeys('amit1234');

    element(by.css('button[type="submit"]')).click();

    var result = element(by.css('app-dashboard h3')).getText()
    expect(result).toEqual('DashBoard 1')

  });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
