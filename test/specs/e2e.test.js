const dialog = require('../pageobjects/dialog.page');
const data = require('../../data/data');
const expect = require('chai').expect;

describe('Dialog', ()=>{
    it('Successful registration', async ()=>{
        await (await dialog.loginRegistBtn).click()
        await dialog.regis(data.account.name,data.account.email,data.account.password,data.account.password)
        // await dialog.login(data.account.email,data.account.password)
        const text = await (await dialog.regisNotif).getText()
        console.log(text);
        expect(text).equal("Registration Successful");
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
        // dialog.loginBtn.click();

        // let text = dialog.mainName.getText();
        // console.log(text);
        // expect(text).equal(data.account.email);

        // dialog.dialogOkBtn.click();
    });

    it('Unsuccessful registration with existing email', async ()=>{
        await dialog.regis(data.account.name,data.account.email,data.account.password,data.account.password)
        const text = await (await dialog.regisNotif).getText()
        console.log(text);
        expect(text).equal("Email Already Exists");
        
    });

    it('Unsuccessful registration without fill the email', async ()=>{
        await dialog.regis(data.account.name,'',data.account.password,data.account.password)
        const a = await (await dialog.regisError).getText()
        expect(a).to.include('Enter');
        
    });

    it('Unsuccessful registration without fill the email', async ()=>{
        await dialog.regis(data.account.name,'',data.account.password,data.account.password)
        const a = await (await dialog.regisError).getText()
        expect(a).to.include('Enter');
        
    });
})