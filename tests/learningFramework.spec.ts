import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { logger } from '../utils/logger';

test.describe('Completion of Basic E-commerce User Flow', () => {
  test('Verify the site URL, product pages, adding products to Cart and total amount on Cart page', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await test.step('Step 1: Navigate to the site and verify the homepage', async () => {
      logger.info('Navigating to Demoblaze homepage...');
      await homePage.navigateTo('/');
      const url = page.url();
      logger.info(`Landed on: ${url}`);
      expect(url).toContain('demoblaze');
    });

    await test.step('Step 2: Navigate to a product page and add the product to cart', async () => {
      await homePage.clickOnProduct('Samsung galaxy s6');
      const isSamsung = await productPage.verifyProductTitle('Samsung');
      if (!isSamsung) logger.error('Product page title of Samsung did not match');
      expect(isSamsung).toBeTruthy();
      await productPage.addToCart();
    });

    await test.step('Step 3: Navigate to second product page and add the product to cart', async () => {
      await homePage.navigateTo('/');
      await homePage.clickOnProduct('Nokia lumia 1520');
      const isNokia = await productPage.verifyProductTitle('Nokia');
      if (!isNokia) logger.error('Product page title for Nokia did not match');
      expect(isNokia).toBeTruthy();
      await productPage.addToCart();
    });

    await test.step('Step 4: Navigate to cart page and verify the total amount', async () => {
      await page.click('#cartur');
      const total = await cartPage.getTotalPrice();
      logger.info(`Total price is: ${total}`);
      if (total <= 0) logger.error(`Total price is invalid or zero: ${total}`);
      expect(total).toBeGreaterThan(0);
    });
  });
});
