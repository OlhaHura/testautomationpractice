import { Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class PlaywrightPracticePage extends BasePage {
    readonly title: Locator
    readonly btn_primatyAction: Locator
    readonly btn_toggleButton: Locator


    constructor(page: Page) {
        super(page);
        this.title = page.locator('[itemprop="name"]')
        this.btn_primatyAction = page.getByRole('button', {name: 'Primary Action'})
        this.btn_toggleButton = page.getByRole('button', {name: 'Toggle Button'})

    }

}