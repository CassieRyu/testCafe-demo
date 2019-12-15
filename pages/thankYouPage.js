import { Selector } from 'testcafe'; 

class thankYouPage {

    constructor() {
        this.header = Selector('#article-header');
    }

    async getTitle() {
        return this.header.innerText;
    }
}

export default new thankYouPage();