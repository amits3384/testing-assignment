import { browser, by, element } from 'protractor';

export class AppPage {
  // navigateTo(): Promise<unknown> {
  navigateTo() {

    // return browser.get(browser.baseUrl) as Promise<unknown>;
    return browser.get('/');
  }

  // getTitleText(): Promise<string> {
  //   return element(by.css('app-root .content span')).getText() as Promise<string>;
  // }

  getTitleText(){
    return element(by.css('app-login h3')).getText();
  }
}
