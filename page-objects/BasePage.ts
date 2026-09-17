import { Locator, Page } from '@playwright/test'

export class BasePage {
  readonly page: Page
  readonly cookieButton: Locator

  constructor(page: Page) {
    this.page = page
    this.cookieButton = page.locator('#cookieChoiceDismiss')
  }

  async openWeb(){
    await this.page.goto('/')
    await this.waitForPageLoaded()
    await this.closeCookieAlert()
  }

  async waitForPageLoaded() {
    await this.page.waitForLoadState('domcontentloaded')
    await this.page.waitForTimeout(1000) // Wait for 1 second to ensure the page is fully loaded
  }

  async closeCookieAlert() {
    if (await this.cookieButton.isVisible()) {
        await this.cookieButton.click();
    }
}

  async getTitle() {
    return await this.page.title()
  }

  async getUrl() {
    return this.page.url()
  }

}