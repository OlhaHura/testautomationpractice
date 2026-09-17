import { expect, test } from '@playwright/test'
import { MenuComponent } from '../../page-objects/components/MenuComponent';
import { PlaywrightPracticePage } from '../../page-objects/PlaywrightPracticePage'

test.describe.parallel('PlaywrightPractice page', () => {
    let menu: MenuComponent
    let practicePage: PlaywrightPracticePage


    //Before Hook
    test.beforeEach(async ({ page }) => {
        menu = new MenuComponent(page)
        practicePage = new PlaywrightPracticePage(page)
        await practicePage.openWeb()
        await menu.clickOnTab('PlaywrightPractice')
    })


    test('Test 10: Open PlaywrightPractice page', async ({ page }) => {
        await expect(page).toHaveURL('p/playwrightpractice.html')
        await expect(practicePage.title).toHaveText('PlaywrightPractice')
    })


    test('Test 20: Click Primary Action button', async ({ page }) => {
        await expect(practicePage.btn_primatyAction).toBeVisible()
        await expect(practicePage.btn_primatyAction).toBeEnabled()
        await practicePage.btn_primatyAction.click()
    })


    test('Test 30: Hover over the Toggle Button', async ({ page }) => {
        await expect(practicePage.btn_toggleButton).toBeVisible()
        await expect(practicePage.btn_toggleButton).toBeEnabled()

        //hover over the button
        await practicePage.btn_toggleButton.hover()

        //verify the button is hovered
        await expect(practicePage.btn_toggleButton).toHaveCSS('background-color', 'rgb(128, 128, 128)')
    })


})
