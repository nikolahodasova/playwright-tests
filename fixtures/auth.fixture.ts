import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../test-data/users.json';

type AuthFixtures = {
  authenticatedPage: Page;
};
export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      users.standard_user.username,
      users.standard_user.password
    );

    await use(page);
  },
});
export { expect } from '@playwright/test';