import { test, expect } from '@playwright/test'
import { clickLink } from '../../helpers/clickHelpers'

test.describe('Annotations', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('URLHERE')

    await clickLink(page, 'HTML Elements')
  })

  // test.fail("Annotations - fail", async ({ page }) => {
  //   // test.fail();

  //   const mainHeading = page.locator("#main_heading");

  //   await expect(mainHeading).toHaveText('asdqwdwqdqwdqwdw')
  // });

  // test.fixme("Annotations - fail", async ({ page }) => {
  //   // test.fail();

  //   const mainHeading = page.locator("#main_heading");

  //   await expect(mainHeading).toHaveText("asdqwdwqdqwdqwdw");
  // });

  // test("Annotations - fail", async ({ page }) => {
  //   test.slow();

  //   const mainHeading = page.locator("asdsadasd");

  //   await mainHeading.click();
  // });

  /**
   * 1. Go to 'URLHERE'
   * 2. Click on the 'WHATEVER' card
   * 3. Validate Hello World and I Like automation testing! texts are visible
   * 5. Validate their texts are equal to expected texts
   * 6. Validate their id and value
   */

  test('Annotations - step', { tag: ['@smoke', '@regression'] }, async ({ page }, testInfo) => {

    // console.log(testInfo.title)
    // console.log(testInfo.error?.message)

    const paragraphs = page.locator('[data-identifier="Paragraphs"] > p')
    const paragraphsAll = await paragraphs.all()
    const expectedTexts = ['Hello World!', 'I like automation testing!']

    await test.step('1. Go to "URLHERE"', async () => {
      await page.goto('URLHERE')
    })

    await test.step('2. Click on the "Html Elements" card', async () => {
      await clickLink(page, 'HTML Elements')
    })

    await test.step('3. Validate Hello World and I Like automation testing! texts are visible', async () => {
      for(const paragraph of paragraphsAll) {
        await expect(paragraph).toBeVisible()
      }
    })

    await test.step('5. Validate their texts are equal to expected texts', async () => {
      await expect(paragraphs).toHaveText(expectedTexts)
    })
  })
})
