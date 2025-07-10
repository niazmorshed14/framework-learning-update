import { BasePage } from './BasePage';
/**
 * HomePage contains methods for interacting with the homepage of the Demoblaze site.
 * It allows navigation into individual product pages by clicking on product links.
 */

export class HomePage extends BasePage {
  /**
   * Clicks on a product link by its visible name.
   *
   * @param productName - The exact visible text of the product (ex: "Samsung galaxy s6").
   *
   * @example
   * await homePage.clickOnProduct('Nokia lumia 1520');
   *
   * @remarks
   * Since this is a very small framework
      we directly used the built-in "has-text" function in the method
   */
  async clickOnProduct(productName: string) {
    await this.click(`a:has-text("${productName}")`);
  }
}