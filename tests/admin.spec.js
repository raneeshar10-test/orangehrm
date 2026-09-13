import {test,expect} from '@playwright/test'
import commonurl from '../utils/commomurl.json'

test.use({ storageState: 'session.json' })

test.describe('Admin scenario', () => {

test('Admin scenario', async ({page}) => {

    await page.goto(commonurl.loginurl) // or your app's home/dashboard URL post-login

    const adminLink = page.getByRole('link', { name: 'Admin' })
    await expect(adminLink).toBeVisible()
    await adminLink.click()
})

})