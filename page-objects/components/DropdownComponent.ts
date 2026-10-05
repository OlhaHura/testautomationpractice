import { Locator, Page } from '@playwright/test'
import { BasePage } from '../BasePage'


export class DropdownComponent extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async scrollTo(dropdown: Locator) {
        await dropdown.scrollIntoViewIfNeeded()
    }

    async open(dropdown: Locator) {
        await dropdown.click()
    }

    async selectByLabel(dropdown: Locator, label: string) {
        await dropdown.selectOption({ label })
    }
}
