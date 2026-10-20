import { expect, test } from '@playwright/test'
import { MenuComponent } from '../../page-objects/components/MenuComponent';
import { HiddenElementsPage } from '../../page-objects/HiddenElementsPage'

test.describe('Hidden Elements & AJAX page', () => {
    let menu: MenuComponent
    let hiddenElementsPage: HiddenElementsPage


    //Before Hook
    test.beforeEach(async ({ page }) => {
        menu = new MenuComponent(page)
        hiddenElementsPage = new HiddenElementsPage(page)
        await hiddenElementsPage.openWeb()
        await menu.clickOnTab('Hidden Elements & AJAX')
    })


    test('Test 10: Show Input Box 2', async () => {
        await expect(hiddenElementsPage.inputBox2).toBeHidden()

        await hiddenElementsPage.btn_toggleInputBox2.click()

        await expect(hiddenElementsPage.inputBox2).toBeVisible()
    })


    test('Test 20: Hide Input Box 2', async () => {
        await expect(hiddenElementsPage.inputBox2).toBeHidden()

        await hiddenElementsPage.btn_toggleInputBox2.click()
        await expect(hiddenElementsPage.inputBox2).toBeVisible()

        await hiddenElementsPage.btn_toggleInputBox2.click()
        await expect(hiddenElementsPage.inputBox2).toBeHidden()
    })


    test('Test 30: Show Checkbox 2', async () => {
        await expect(hiddenElementsPage.checkbox2).toBeHidden()

        await hiddenElementsPage.btn_toggleCheckbox2.click()

        await expect(hiddenElementsPage.checkbox2).toBeVisible()
    })


    test('Test 40: Hide Checkbox 2', async () => {
        await expect(hiddenElementsPage.checkbox2).toBeHidden()

        await hiddenElementsPage.btn_toggleCheckbox2.click()
        await expect(hiddenElementsPage.checkbox2).toBeVisible()

        await hiddenElementsPage.btn_toggleCheckbox2.click()
        await expect(hiddenElementsPage.checkbox2).toBeHidden()
    })


    test('Test 50: Load AJAX Content', async () => {
        await hiddenElementsPage.btn_loadAjaxContent.click()

        await expect(hiddenElementsPage.ajaxContent).toContainText('AJAX Content Loaded')
        await expect(hiddenElementsPage.ajaxContent).toContainText('This is some dynamic content loaded through AJAX.')
    })

})
