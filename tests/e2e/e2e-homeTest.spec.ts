import { expect, test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { MenuComponent } from '../../page-objects/components/MenuComponent';
import { DropdownComponent } from '../../page-objects/components/DropdownComponent';

test.describe('Home page', () => {
    let homePage: HomePage
    let menu: MenuComponent
    let dropdown: DropdownComponent

    const randomString = (length: number): string =>
        Math.random().toString(36).substring(2, 2 + length)

    const randomName = `User${randomString(6)}`
    const randomEmail = `${randomString(4)}@a.com`


    //Before Hook
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        menu = new MenuComponent(page)
        dropdown = new DropdownComponent(page)
        await homePage.openWeb()
    })


    test('Test 10: Open Home page', async ({ page }) => {
        await menu.clickOnTab('Home')
        await expect(homePage.entryTitle).toBeVisible()
    })


    test('Test 20: Type random name and email into the Data Entry Form', async () => {
        await homePage.fillDataEntryForm(randomName, randomEmail)

        await expect(homePage.nameInput).toHaveValue(randomName)
        await expect(homePage.emailInput).toHaveValue(randomEmail)
    })


    test('Test 30: Dynamic Button', async () => {
        await homePage.btn_dynamicStart.click()
        await expect(homePage.btn_dynamicStop).toBeVisible()

        await homePage.btn_dynamicStop.click()
        await expect(homePage.btn_dynamicStart).toBeVisible()

    })


    test('Test 40: Select Japan from the Country drop-down', async () => {
        await dropdown.scrollTo(homePage.countryDropdown)
        await dropdown.open(homePage.countryDropdown)
        await dropdown.selectByLabel(homePage.countryDropdown, 'Japan')

        await expect(homePage.countryDropdown).toHaveValue('japan')
    })

})
