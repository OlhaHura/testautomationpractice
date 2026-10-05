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

    async selectByText(options: Locator, label: string) {
        const option = options.filter({ hasText: new RegExp(`^${label}$`) })
        await option.scrollIntoViewIfNeeded()
        await option.click()
    }

    randomItem(from: number, to: number): string {
        const itemNumber = Math.floor(Math.random() * (to - from + 1)) + from
        return `Item ${itemNumber}`
    }
}
