import { Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class PlaywrightPracticePage extends BasePage {
    readonly title: Locator
    readonly btn_primatyAction: Locator
    readonly btn_toggleButton: Locator
    readonly dragAndDropSection: Locator
    readonly dragSource: Locator
    readonly dropZone: Locator
    readonly scrollingDropdownSection: Locator
    readonly scrollingDropdown: Locator
    readonly scrollingDropdownOptions: Locator


    constructor(page: Page) {
        super(page);
        this.title = page.locator('[itemprop="name"]')
        this.btn_primatyAction = page.getByRole('button', {name: 'Primary Action'})
        this.btn_toggleButton = page.getByRole('button', {name: 'Toggle Button'})
        this.dragAndDropSection = page.getByRole('heading', { name: 'Drag and Drop' })
        this.dragSource = page.locator('#draggable')
        this.dropZone = page.locator('#droppable')
        this.scrollingDropdownSection = page.getByRole('heading', { name: 'Scrolling DropDown' })
        this.scrollingDropdown = page.locator('#comboBox')
        this.scrollingDropdownOptions = page.locator('#dropdown .option')

    }

}