import { test, expect } from '@playwright/test';
import commonurl from '../../utils/commomurl.json';
import { LoginPage } from '../../testpom/login.js';
import data from '../../testdata/login.json';

test('Login test', async ({ page }) => {
  const url = commonurl.loginurl;
  const user = data[0];

  await page.goto(url);
  await expect(page).toHaveTitle(/OrangeHRM/);
  await expect(page).toHaveURL(url);

  const loginPage = new LoginPage(page);
  await loginPage.login(user.username, user.password);

  await expect(page).toHaveURL(/\/dashboard\//i);
  await page.context().storageState({ path: 'session.json' });
});