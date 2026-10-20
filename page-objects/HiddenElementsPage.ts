import { Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class HiddenElementsPage extends BasePage {
    readonly title: Locator
    readonly inputBox2: Locator
    readonly checkbox2: Locator
    readonly btn_toggleInputBox2: Locator
    readonly btn_toggleCheckbox2: Locator
    readonly btn_loadAjaxContent: Locator
    readonly ajaxContent: Locator

    constructor(page: Page) {
        super(page);
        this.title = page.locator('[itemprop="name"]')
        this.inputBox2 = page.locator('#container #input2')
        this.checkbox2 = page.locator('#checkbox2')
        this.btn_toggleInputBox2 = page.getByRole('button', { name: 'Toggle Input Box 2' })
        this.btn_toggleCheckbox2 = page.getByRole('button', { name: 'Toggle Checkbox 2' })
        this.btn_loadAjaxContent = page.getByRole('button', { name: 'Load AJAX Content' })
        this.ajaxContent = page.locator('#ajaxContent')
    }

}
