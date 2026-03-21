import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

test('User can add product to cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/inventory.html');
  await inventoryPage.verifyLoaded();
  await inventoryPage.addProductToCart();
  await inventoryPage.verifyCartCount('1');
});