
import { Selector, t } from 'testcafe';

const examplePage = {

    nameInput: Selector('#developer-name'),
    populateButton: Selector('#populate'),
    featureLabel: Selector('label'),
    submitButton: Selector('#submit-button'),

    async inputName(name) {
        await t.typeText(this.nameInput, name);
    },

    async selectFeature(text) {
        await t.click(this.featureLabel.withText(text));
    },

    async submit() {
        await t.click(this.submitButton);
    }
}

export default examplePage