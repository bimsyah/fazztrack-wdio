import page from './page.js';

class HomePage extends page {

    get accountName() {
        return $(`#nameofuser`)
    }

    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }
};

export default new HomePage()