import { expect, test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { MenuComponent } from '../../page-objects/components/MenuComponent';

test.describe('Home page', () => {
    let homePage: HomePage
    let menu: MenuComponent


    //Before Hook
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        menu = new MenuComponent(page)
        await homePage.visit()
    })


    test('Test 10: Open Home page', async ({ page }) => {
        await menu.clickOnTab('Home')
        await expect(homePage.entryTitle).toBeVisible()
    })


})
