import { test } from '@playwright/test'
import { LoadTestComponent } from '../../page-objects/components/LoadTestComponent'
import { HomePage } from '../../page-objects/HomePage'
import { PlaywrightPracticePage } from '../../page-objects/PlaywrightPracticePage'

const homeUsers = 30
const practiceUsers = 30

test.describe('Load testing', () => {
    test('Test 10: Home page load', async ({ browser }) => {
        const loadTest = new LoadTestComponent(browser)

        await loadTest.openPage({
            users: homeUsers,
            createPage: (page) => new HomePage(page),
            openTab: (menu) => menu.home,
            readyLocator: (homePage) => homePage.entryTitle,
        })
    })

    test('Test 20: PlaywrightPractice page load', async ({ browser }) => {
        const loadTest = new LoadTestComponent(browser)

        await loadTest.openPage({
            users: practiceUsers,
            createPage: (page) => new PlaywrightPracticePage(page),
            openTab: (menu) => menu.playwrightpractice,
            readyLocator: (practicePage) => practicePage.title,
        })
    })
})
