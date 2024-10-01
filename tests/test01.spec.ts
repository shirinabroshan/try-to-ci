import { test, expect } from '@playwright/test';

test.describe('New Todo', () => {

  test('Test case 2 - with css/xpath', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/projcetfree/Oxer%20Free%20Website%20Template%20-%20Free-CSS.com/oxer-html/index.html');

    //home
    await page.locator('#navbarSupportedContent > div > ul > li.nav-item.active > a').click();
    await expect(page.locator('#carouselExampleIndicators > div > div:nth-child(1) > div > div > h1')).toBeVisible();
    //about
    await page.locator('#navbarSupportedContent > div > ul > li:nth-child(2) > a').click();
    await expect(page.locator('body > section > div > div > div > div > div > div > div > div > h2')).toBeVisible();
    //classes
    await page.locator('#navbarSupportedContent > div > ul > li:nth-child(3) > a').click();
    await expect(page.locator('body > section > div > div > div > div > div.row > div > div > h2')).toBeVisible();
    //blog
    await page.locator('#navbarSupportedContent > div > ul > li:nth-child(4) > a').click();
    await expect(page.locator('body > section > div > div:nth-child(1) > div > div > h2')).toBeVisible();

  });

});

