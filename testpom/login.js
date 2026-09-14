export class login {

    unamtxt
    pastxt
    logclk

    constructor(page){

        this.unamtxt = page.locator('[name="username"]');
        this.pastxt = page.locator('[name="password"]');
        this.logclk = page.locator('[type="submit"]');
    }

    async iusr(unam){
        await this.unamtxt.fill(unam)
        }

     async ipas(pas){
        await this.pastxt.fill(pas)
        }
   
     async icl(){
        await this.logclk.click();
        }
}