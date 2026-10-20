import { Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class HomePage extends BasePage {
    readonly entryTitle: Locator
    readonly nameInput: Locator
    readonly emailInput: Locator
    readonly btn_dynamicStart: Locator
    readonly btn_dynamicStop: Locator
    readonly countryDropdown: Locator
    readonly paginationSection: Locator
    readonly pagination: Locator
    readonly productTable: Locator

    constructor(page: Page) {
        super(page);
        this.entryTitle = page.locator('text=Data Entry Form')
        this.nameInput = page.locator('#name')
        this.emailInput = page.locator('#email')
        this.btn_dynamicStart = page.locator('.start')
        this.btn_dynamicStop = page.locator('.stop')
        this.countryDropdown = page.locator('#country')
        this.paginationSection = page.getByRole('heading', { name: 'Pagination Web Table' })
        this.pagination = page.locator('#pagination')
        this.productTable = page.locator('#productTable')
    }

    async fillDataEntryForm(name: string, email: string) {
        await this.nameInput.fill(name)
        await this.emailInput.fill(email)
    }

    async openPaginationPage(pageNumber: number) {
        await this.pagination.locator('a', { hasText: new RegExp(`^${pageNumber}$`) }).click()
    }

    productCheckbox(productName: string) {
        return this.productTable.locator('tr', { hasText: productName }).locator('input[type="checkbox"]')
    }
}
