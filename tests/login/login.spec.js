import {test,expect} from '@playwright/test'
import commonurl from '../../utils/commomurl.json'
import {login} from '../../testpom/login.js'
import data from '../../testdata/login.json'

test('Login test',async({page})=>{

    const url = commonurl.loginurl;
    await page.goto(url);
    await expect(page).toHaveTitle(/OrangeHRM/);
    await expect(page).toHaveURL(url);

    const unam = data[0].username;
    const pas = data[0].password;

    const log = new login(page);

    await log.iusr(unam);
    await log.ipas(pas);
    await log.icl();

     await page.waitForTimeout(10000)
    page.context().storageState({path:'session.json'})
    
  }
)