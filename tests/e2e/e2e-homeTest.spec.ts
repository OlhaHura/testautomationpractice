import { expect, test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { MenuComponent } from '../../page-objects/components/MenuComponent';

test.describe('Home page', () => {
    let homePage: HomePage
    let menu: MenuComponent

    const randomString = (length: number): string =>
        Math.random().toString(36).substring(2, 2 + length)

    const randomName = `User${randomString(6)}`
    const randomEmail = `${randomString(4)}@a.com`


    //Before Hook
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        menu = new MenuComponent(page)
        await homePage.openWeb()
    })


    test('Test 10: Open Home page', async ({ page }) => {
        await menu.clickOnTab('Home')
        await expect(homePage.entryTitle).toBeVisible()
    })


    test('Test 20:Type random name and email into the Data Entry Form', async () => {
        await homePage.fillDataEntryForm(randomName, randomEmail)

        await expect(homePage.nameInput).toHaveValue(randomName)
        await expect(homePage.emailInput).toHaveValue(randomEmail)
    })

})
