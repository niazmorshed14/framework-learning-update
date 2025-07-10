import { BasePage } from './BasePage';
/**
 * CartPage handles all interactions related to the cart section
 * such as reading total price or verifying cart items.
 */


export class CartPage extends BasePage {
/**
   * Waits for the total price element to appear and returns the total cart amount as a number.
   * If the element is not found or text is missing, defaults to 0.
   *
   * @returns Total price in the cart as a number.
   * @example
   * const total = await cartPage.getTotalPrice();
   * expect(total).toBeGreaterThan(0);
   * 
   * @remarks
   * Since this is a very small framework
      we directly used the locators in the method.
      Generally we declare locators on corresponding page classes
   */
  async getTotalPrice() {
  await this.page.waitForSelector('#totalp', { state: 'visible' });
  const priceText = await this.page.textContent('#totalp');
  return parseInt(priceText || '0');
}
}
