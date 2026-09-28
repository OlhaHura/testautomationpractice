import { Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class HomePage extends BasePage {
    readonly entryTitle: Locator
    readonly nameInput: Locator
    readonly emailInput: Locator

    constructor(page: Page) {
        super(page);
        this.entryTitle = page.locator('text=Data Entry Form')
        this.nameInput = page.locator('#name')
        this.emailInput = page.locator('#email')
    }


    async fillDataEntryForm(name: string, email: string) {
        await this.nameInput.fill(name)
        await this.emailInput.fill(email)
    }
}