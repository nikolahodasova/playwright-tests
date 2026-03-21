import { test, expect } from '@playwright/test';

test('Login page loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#login-button')).toBeVisible();
});