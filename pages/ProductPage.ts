import { BasePage } from './BasePage';
/**
 * ProductPage handles interactions on individual product detail pages.
 * It includes actions like verifying the product title and adding products to the cart.
 */

export class ProductPage extends BasePage {
  /**
   * Verifies whether the product title displayed on the page includes the given keyword.
   *
   * @param title - Partial or full product title to check against the displayed name.
   * @returns A boolean indicating if the title is matched.
   *
   * @remarks
   *  Since this is a very small framework
      we directly used the locators in the method.
      Generally we declare locators on corresponding page classes
   */
  async verifyProductTitle(title: string) {
    const productTitle = await this.getText('.name');
    return productTitle?.includes(title);
  }

  /**
   * Adds the product to the cart by clicking the "Add to cart" button.
   * Waits for the browser alert (dialog) and accepts it.
   *
   * @example
   * await productPage.addToCart();
   * 
   * @remarks
   * This method assumes that the alert dialog will appear immediately after clicking.
   * It listens to the 'dialog' event and ensures proper alert handling.
   * Since this is a very small framework
      we directly used the locators in the method.
      Generally we declare locators on corresponding page classes
   */
  async addToCart() {
  const [dialog] = await Promise.all([
    this.page.waitForEvent('dialog'),
    this.page.click('a:has-text("Add to cart")'),
  ]);
  await dialog.accept();
}
}
