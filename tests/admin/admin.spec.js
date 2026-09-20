import {test,expect} from '@playwright/test'
import commonurl from '../../utils/commomurl.json'
import {admin} from '../../testpom/admin.js'
import data from '../../testdata/adminuser.json'

test.use({ storageState: 'session.json' })

test.describe('Admin scenario', () => {

test('Admin scenario', async ({page}) => {

    await page.goto(commonurl.loginurl) // or your app's home/dashboard URL post-login

    const adminLink = page.getByRole('link', { name: 'Admin' })
    await expect(adminLink).toBeVisible()
    await adminLink.click()

    const add = page.getByRole('button', { name: 'Add' })
    await expect(add).toBeVisible()
    await add.click()
    await page.waitForTimeout(10000)


    // using the locator for the dropdown and selecting the option
      const userRoleDropdown = page.locator('.oxd-input-group:has(label:text("User Role")) .oxd-select-text');
       await userRoleDropdown.click();
       await page.getByRole('option', { name: 'Admin' }).click();

      const statusDropdown = page.locator('.oxd-input-group:has(label:text("Status")) .oxd-select-text');
       await statusDropdown.click();
       await page.getByRole('option', { name: 'Enabled' }).click();


    const enam = data[0].empnam;
    const usenam = data[0].usenam;
    const pas = data[0].password;
    const adcps = data[0].confirmPassword;

    const adm = new admin(page);

     await adm.selectFromAutocomplete(adm.empnam, enam , 'Orange  Test');
     await adm.usrnam.fill(usenam);
     await adm.paswr.fill(pas);
     await adm.cpasr.fill(adcps);
     await adm.subm();
     await page.waitForTimeout(10000)
    
  })

})