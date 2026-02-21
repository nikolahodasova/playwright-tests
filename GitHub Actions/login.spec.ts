import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import users from '../test-data/users.json';

test('User can login and add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(
    users.standard_user.username,
    users.standard_user.password
  );

  await inventoryPage.verifyLoaded();
  await inventoryPage.addProductToCart();
  await inventoryPage.verifyCartCount('1');
});