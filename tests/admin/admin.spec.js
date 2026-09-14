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

 //   const enam = data[0].empnam;
    const usenam = data[0].usenam;
    const pas = data[0].password;
    const adcps = data[0].confirmPassword;

    const adm = new admin(page);

  //   await adm.empnam.fill(enam);
     await adm.usrnam.fill(usenam);
     await adm.paswr.fill(pas);
     await adm.cpasr.fill(adcps);
     await adm.subm();
     await page.waitForTimeout(10000)
    
})



})