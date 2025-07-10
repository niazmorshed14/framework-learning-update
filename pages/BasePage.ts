import { Page } from '@playwright/test';

/**
 * BasePage provides common reusable methods for interacting with web pages.
 * All page classes should extend this base to follow the POM structure.
 */
export class BasePage {
  constructor(public page: Page) {}

/**
   * Navigates to a specified URL.
   * @param url - The full or relative URL to navigate to.
   * @example
   * await this.navigateTo('/');
   */
  async navigateTo(url: string) {
    await this.page.goto(url);
  }

   /**
   * Listens for and accepts a browser alert dialog.
   * Useful for handling alerts after actions like "Add to cart".
   * @example
   * await this.acceptAlert();
   */
  async acceptAlert() {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });
  }

   /**
   * Retrieves the text content from the specified selector.
   * @param selector - CSS selector of the element to extract text from.
   * @returns Text content as a string or null if not found.
   * @example
   * const title = await this.getText('.product-title');
   */
  async getText(selector: string) {
    return await this.page.textContent(selector);
  }

  /**
   * Clicks on an element using the provided selector.
   * @param selector - CSS selector of the element to click.
   * @example
   * await this.click('#submit-button');
   */
  async click(selector: string) {
    await this.page.click(selector);
  }
}
