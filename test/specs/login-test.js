// const frontPage = require('../pageobjects/front-page');
import FrontPage from '../pageobjects/front-page.js';
import HomePage from '../pageobjects/home-page.js';

describe('Demoblaze app login scenario', () => {
    it('Successfully login using correct credential', async() => {
        await FrontPage.open()

        await FrontPage.login('bimasyah', 'bimahore')
        await HomePage.verifyLoginSuccess('bimasyah')
    })
});