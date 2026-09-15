import { Page } from '@playwright/test'

export class BasePage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async visit(){
    await this.page.goto("/")
    await this.waitForPageLoaded()
  }

  async waitForPageLoaded() {
    await this.page.waitForLoadState('domcontentloaded')
  }

  async getTitle() {
    return await this.page.title()
  }

  async getUrl() {
    return this.page.url()
  }

}