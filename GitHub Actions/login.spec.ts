import { test , expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as userData from '../test-data/users.json';

test.describe('Login testy', () =>{
    test('Succesful login with valid data', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(userData.standard_user.username, userData.standard_user.password);

        await expect(page.locator('.title')).toHaveText('Products');
    });
});