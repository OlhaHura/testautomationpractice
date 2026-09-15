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

        this.home = menu.getByRole('link', { name: 'Home', exact: true })
        this.udemyCourses = menu.getByRole('link', { name: 'Udemy Courses', exact: true })
        this.onlineTrainings = menu.getByRole('link', { name: 'Online Trainings', exact: true })
        this.blog = menu.getByRole('link', { name: 'Blog', exact: true })
        this.playwrightpractice = menu.getByRole('link', { name: 'PlaywrightPractice', exact: true })

    }

    async clickOnTab(tabName: string) {
        switch (tabName) {
            case 'Home':
                await this.home.click()
                await this.waitForPageLoaded()
                break
            case 'Udemy Courses':
                await this.udemyCourses.click()
                await this.waitForPageLoaded()
                break
            case 'Online Trainings':
                await this.onlineTrainings.click()
                await this.waitForPageLoaded()
                break
            case 'Blog':
                await this.blog.click()
                await this.waitForPageLoaded()
                break
            case 'PlaywrightPractice':
                await this.playwrightpractice.click()
                await this.waitForPageLoaded()
                break
            default:
                throw new Error(`This tab does not exist: ${tabName}`)
        }
    }

}