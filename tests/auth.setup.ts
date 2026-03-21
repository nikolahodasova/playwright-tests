import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../test-data/users.json';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(
    users.standard_user.username,
    users.standard_user.password
  );

  await page.context().storageState({ path: 'storageState.json' });
});