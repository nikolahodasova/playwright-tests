import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import * as userData from '../test-data/users.json';

test.describe('Eshop košík', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(userData.standard_user.username, userData.standard_user.password);
        await inventoryPage.verifyLoaded();
    });
    test('Pridanie produktu do košíka', async() =>{
        await inventoryPage.addProductToCart();
        await inventoryPage.verifyCartCount('1');
    });
});

