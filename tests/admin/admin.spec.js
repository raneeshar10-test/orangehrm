import { test, expect } from '@playwright/test';
import commonurl from '../../utils/commomurl.json';
import { AdminPage } from '../../testpom/admin.js';
import { LoginPage } from '../../testpom/login.js';
import data from '../../testdata/adminuser.json';

test.describe('Admin scenario', () => {
  test('Admin scenario', async ({ page }) => {
    const url = commonurl.loginurl;
    const user = data[0];

    await page.goto(url);

    const loginPage = new LoginPage(page);
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/\/dashboard\//i);

    const adminLink = page.getByRole('link', { name: 'Admin' });
    await expect(adminLink).toBeVisible();
    await adminLink.click();

    const adminPage = new AdminPage(page);
    await expect(adminPage.addButton).toBeVisible();
    await adminPage.openAddUserForm();

    await adminPage.selectUserRole('Admin');
    await adminPage.selectStatus('Enabled');
    await adminPage.fillUserDetails({
      employeeName: user.empnam,
      username: user.usenam,
      password: user.password,
      confirmPassword: user.confirmPassword,
    });

    await adminPage.saveUser();
    await expect(page.getByText('Successfully Saved')).toBeVisible();
  });
});