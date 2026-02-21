import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login success with POM', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(page.locator('h2')).toHaveText('Secure Area');

});