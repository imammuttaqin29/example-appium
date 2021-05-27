class Dialog {
    get loginRegistBtn() { return $('//android.widget.TextView[@resource-id="com.loginmodule.learning:id/textViewLinkRegister"]') };
    get loginNotif() { return $('//android.widget.TextView[@resource-id="com.loginmodule.learning:id/snackbar_text"]') }
    get loginEmail() { return $('//android.widget.EditText[@resource-id="com.loginmodule.learning:id/textInputEditTextEmail"]') }
    get loginPassword() { return $('//android.widget.EditText[@resource-id="com.loginmodule.learning:id/textInputEditTextPassword"]') }
    get loginBtn() { return $('//android.widget.Button[@resource-id="com.loginmodule.learning:id/appCompatButtonLogin"]') }


    // #registration Activity
    get regisName() { return $('//android.widget.EditText[@resource-id="com.loginmodule.learning:id/textInputEditTextName"]') };
    get regisEmail() { return $('//android.widget.EditText[@resource-id="com.loginmodule.learning:id/textInputEditTextEmail"]') };
    get regisPassword() { return $('//android.widget.EditText[@resource-id="com.loginmodule.learning:id/textInputEditTextPassword"]') };
    get regisConPassword() { return $('//android.widget.EditText[@resource-id="com.loginmodule.learning:id/textInputEditTextConfirmPassword"]') };
    get regisBtn() { return $('//android.widget.Button[@resource-id="com.loginmodule.learning:id/appCompatButtonRegister"]') };
    get regisLoginBtn() { return $('//android.widget.TextView[@resource-id="com.loginmodule.learning:id/appCompatTextViewLoginLink"]') };
    get regisNotif() { return $('//android.widget.TextView[@resource-id="com.loginmodule.learning:id/snackbar_text"]') };
    get regisError() { return $('//android.widget.TextView[@index="0"]') };

    // #main Activity
    get mainName () {return $('//android.widget.TextView[@resource-id="com.loginmodule.learning:id/textViewName" && @index="2"]')};
    get mainEmail () {return $('//android.widget.TextView[@resource-id="com.loginmodule.learning:id/textViewEmail"]')};
    get mainPassword () {return $('//android.widget.TextView[@resource-id="com.loginmodule.learning:id/textViewPassword"]')};

    getDialogLoginNotif = () => {
        return this.regisNotif.getText();
    }

    getDialogRegisNotif = () => {
        return this.regisNotif.getText();
    }

    getDialogEmail = () => {
        return this.mainEmail.getText();
    }

    getDialogName = () => {
        return this.mainName.getText();
    }

    async login (email, password) {
        await (await this.loginEmail).setValue(email);
        await (await this.loginPassword).setValue(password);
        await (await this.loginBtn).click();
    }

    async regis (name, email, password, conpassword) {
        await (await this.regisName).setValue(name);
        await (await this.regisEmail).setValue(email);
        await (await this.regisPassword).setValue(password);
        await (await this.regisConPassword).setValue(conpassword);
        await (await this.regisBtn).click();
    }

}

module.exports = new Dialog();