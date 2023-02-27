import page from './page.js';

class FrontPage extends page {

    get inputUsername() {
        return $('#loginusername')
    }

    get inputPassword() {
        return $('#loginpassword')
    }

    get buttonLogin() {
        return $(`[onclick='logIn()']`)
    }

    get linkTextLogin() {
        return $(`[data-target='#logInModal']`)
    }

    async isBtnloginDisplayed() {
        await (await this.buttonLogin).waitForDisplayed(2000)
        return await (await this.buttonLogin).isDisplayed()
    }

    async login(username, password) {
        await this.linkTextLogin.click()
        await this.isBtnloginDisplayed()
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)

        await this.buttonLogin.click()
    }

    open() {
        return super.open('index.html')
    }

};

export default new FrontPage()