export class admin{


    empnam
    usrnam
    paswr
    cpasr


constructor(page){
//     this.empnam = page.locator('[placeholder="Type for hints..."]')
//     this.usrnam = page.locator('[name="username"]')
//     this.paswr = page.locator('[name="password"]')
//     this.cpasr = page.locator('[name="confirmPassword"]')
this.page = page;
        this.add = page.getByRole('button', { name: 'Add' })
        this.empnam = page.locator('.oxd-input-group:has(label:text("Employee Name")) input');
        this.usrnam = page.locator('.oxd-input-group:has(label:text("Username")) input');
        this.paswr  = page.locator('.oxd-input-group:has(label:text("Password")) input').first();
        this.cpasr  = page.locator('.oxd-input-group:has(label:text("Confirm Password")) input');
        this.status   = page.locator('.oxd-input-group:has(label:text("Status")) .oxd-select-text');
        this.userRole = page.locator('.oxd-input-group:has(label:text("User Role")) .oxd-select-text');
        this.submit   = page.getByRole('button', { name: 'Save' });

}


 async selectFromAutocomplete(inputLocator, text, optionText) {
        await inputLocator.click();
        await inputLocator.fill(text);
        const option = this.page.getByRole('option', { name: optionText });
        await option.waitFor({ state: 'visible' });
        await option.click();
   }

async ausr(adunam){
        await this.usrnam.fill(adunam)
   }

async adpsr(adps){
        await this.paswr.fill(adps)
   }

async adpsr(adcps){
        await this.cpasr.fill(adcps)
   }

async subm(adsub){
        await this.submit.click();
   }
    
}