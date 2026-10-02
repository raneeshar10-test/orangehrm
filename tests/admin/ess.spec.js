import { test, expect } from '@playwright/test';
import commonurl from '../../utils/commomurl.json';
import { AdminPage } from '../../testpom/admin.js';
import { LoginPage } from '../../testpom/login.js';
import data from '../../testdata/essusee.json';

test.describe('Admin scenario', () => {
  for (const user of data) {
    test(`Add user - ${user.scenario}`, async ({ page }) => {
      await page.goto(commonurl.loginurl);

      const loginPage = new LoginPage(page);
      await loginPage.login('Admin', 'admin123');
      await expect(page).toHaveURL(/\/dashboard\//i);

      const adminLink = page.getByRole('link', { name: 'Admin' });
      await expect(adminLink).toBeVisible();
      await adminLink.click();

      const adminPage = new AdminPage(page);
      await expect(adminPage.addButton).toBeVisible();
      await adminPage.openAddUserForm();

      const username = user.scenario === 'correct details'
        ? `raneeow_${Date.now()}`
        : user.usenam;

      await adminPage.selectUserRole('ESS');
      await adminPage.selectStatus('Enabled');
      await adminPage.fillUserDetails({
        employeeName: user.empnam,
        username,
        password: user.password,
        confirmPassword: user.confirmPassword,
      });

      await adminPage.saveUser();

      if (user.expected === 'Successfully Saved') {
        await expect(page.getByText('Successfully Saved')).toBeVisible();
      } else {
        await expect(page.getByText(user.expected).first()).toBeVisible();
        await expect(page.getByText('Successfully Saved')).toHaveCount(0);
      }
    });
  }
});