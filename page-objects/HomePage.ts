import { Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class HomePage extends BasePage {
    readonly entryTitle: Locator

    constructor(page: Page) {
        super(page);
        this.entryTitle = page.locator('text=Data Entry Form')

    }

}