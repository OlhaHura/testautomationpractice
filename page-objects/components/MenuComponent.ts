import { Locator, Page } from '@playwright/test'
import { BasePage } from '../BasePage'


export class MenuComponent extends BasePage{
    readonly home: Locator
    readonly udemyCourses: Locator
    readonly onlineTrainings: Locator
    readonly blog: Locator
    readonly playwrightpractice: Locator

    constructor(page: Page) {
        super(page);

        const menu = page.locator('#PageList2')

        this.home = menu.locator('a', { hasText: 'Home' })
        this.udemyCourses = menu.locator('a', { hasText: 'Udemy Courses' })
        this.onlineTrainings = menu.locator('a', { hasText: 'Online Trainings' })
        this.blog = menu.locator('a', { hasText: 'Blog' })
        this.playwrightpractice = menu.locator('a', { hasText: 'PlaywrightPractice' })

    }

    async openTab(tab: Locator) {
        await tab.click()
        await this.waitForPageLoaded()
    }

    async clickOnTab(tabName: string) {
        switch (tabName) {
            case 'Home':
                await this.openTab(this.home)
                break
            case 'Udemy Courses':
                await this.openTab(this.udemyCourses)
                break
            case 'Online Trainings':
                await this.openTab(this.onlineTrainings)
                break
            case 'Blog':
                await this.openTab(this.blog)
                break
            case 'PlaywrightPractice':
                await this.openTab(this.playwrightpractice)
                break
            default:
                throw new Error(`This tab does not exist: ${tabName}`)
        }
    }

}