import { test, expect } from '@playwright/test'

test.describe('First Test Sute', () => {
  test('Refrest, navigate back and forward', async ({ page }) => {
    // Navigate to a page
    await page.goto('URLHERE')

    // Refresh the page
    await page.reload()

    // Navigate to another page
    await page.goto('URLHERE')

    // Navigate back
    await page.goBack()

    // Navigate forward
    await page.goForward()
  })

  test('Validate page title', async ({ page }) => {
    await page.goto('URLHERE')

    // const title = await page.title();

    // console.log(title, " My page title");


    await expect(page).toHaveTitle('TITLE HERE')
  })

  test('Validate page URL', async ({ page }) => {
    await page.goto('URLHERE')

    // const url = page.url()

    // expect(url).toBe('URLHERE')

    await expect(page).toHaveURL('URLHERE')
  })

  test('My First Test', async ({ page }) => {
    await page.goto('URLHERE')

    const myLogo = page.locator('#logo')
    // await page.click('#logo')

    await myLogo.click()

    await expect(myLogo).toBeVisible()
  })
})
