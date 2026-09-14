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

        this.usrnam = page.locator('.oxd-input-group:has(label:text("Username")) input');
        this.paswr  = page.locator('.oxd-input-group:has(label:text("Password")) input').first();
        this.cpasr  = page.locator('.oxd-input-group:has(label:text("Confirm Password")) input');
        this.submit = page.getByRole('button', { name: 'Save' });



}

   async epnam(enam){
        await this.empnam.fill(enam)
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