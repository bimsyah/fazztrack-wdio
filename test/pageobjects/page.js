export default class page {
    open(path) {
        return browser.url(`https://www.demoblaze.com/${path}`)
    }
};