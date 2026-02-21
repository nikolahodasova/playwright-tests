import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;
    readonly addToCartButton: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.title');
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
  }
  async verifyLoaded() {
    await expect(this.title).toHaveText('Products');
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async verifyCartCount(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }
}