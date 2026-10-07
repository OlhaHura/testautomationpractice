import { Browser, BrowserContext, devices, expect, Locator, Page, test } from '@playwright/test'
import { BasePage } from '../BasePage'
import { MenuComponent } from './MenuComponent'

type Visit = {
    user: number
    startedAt: number
    pageLoaded: boolean
}

type PageLoad<T extends BasePage> = {
    users: number
    createPage: (page: Page) => T
    openTab: (menu: MenuComponent) => Locator
    readyLocator: (pageObject: T) => Locator
    startSpreadMs?: number
}

export class LoadTestComponent {
    readonly browser: Browser

    constructor(browser: Browser) {
        this.browser = browser
    }

    async openPage<T extends BasePage>({
        users,
        createPage,
        openTab,
        readyLocator,
        startSpreadMs = 10_000,
    }: PageLoad<T>) {
        test.setTimeout(users * 6_000)

        const visits = await Promise.all(
            Array.from({ length: users }, (_, index) =>
                this.visitPage(index + 1, openTab, createPage, readyLocator)
            )
        )

        expect(visits).toHaveLength(users)
        this.expectVisitsStartedTogether(visits, startSpreadMs)

        for (const visit of visits) {
            expect(visit.pageLoaded).toBe(true)
        }
    }

    private async visitPage<T extends BasePage>(
        user: number,
        openTab: (menu: MenuComponent) => Locator,
        createPage: (page: Page) => T,
        readyLocator: (pageObject: T) => Locator
    ): Promise<Visit> {
        const { context, page } = await this.newUserSession()
        const pageObject = createPage(page)
        const menu = new MenuComponent(page)
        const startedAt = Date.now()

        try {
            await pageObject.openWeb()
            await menu.openTab(openTab(menu))
            const pageLoaded = await readyLocator(pageObject).isVisible()
            return { user, startedAt, pageLoaded }
        } finally {
            await context.close()
        }
    }

    private async newUserSession(): Promise<{ context: BrowserContext; page: Page }> {
        const projectUse = test.info().project.use
        const context = await this.browser.newContext({
            ...devices['Desktop Chrome'],
            baseURL: projectUse.baseURL,
        })
        const page = await context.newPage()
        return { context, page }
    }

    private expectVisitsStartedTogether(visits: Visit[], startSpreadMs: number) {
        const startedAt = visits.map(visit => visit.startedAt)
        const spreadMs = Math.max(...startedAt) - Math.min(...startedAt)
        expect(spreadMs).toBeLessThan(startSpreadMs)
    }
}
