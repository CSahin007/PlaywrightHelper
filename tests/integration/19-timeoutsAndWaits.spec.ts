import { test, expect } from '../../fixtures/page-object-fixture'
import { clickLink } from '../../helpers/clickHelpers'

test.describe('Timeouts & Waits', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/frontend')

    await clickLink(page, 'Waits')
  })

  test('should wait for an element to be visible', async ({ waitsPage }) => {
    // test.setTimeout(8000)

    await waitsPage.redBoxButton.click({ timeout: 40000 })
    await expect(waitsPage.redBox).toBeVisible({ timeout: 11000 })
  })

  test('Waits', async ({ page, waitsPage }) => {
    //1st way
    await page.waitForSelector('#main_heading', { state: 'visible' })
    await waitsPage.heading.waitFor({ state: 'visible' })

    
  })
})
