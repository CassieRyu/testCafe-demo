import { Selector } from 'testcafe'; // first import testcafe selectors
import {examplePage} from '../pages/examplePage';
import {thankYouPage} from '../pages/thankYouPage';

fixture `Getting Started`// declare the fixture
    .page `https://devexpress.github.io/testcafe/example`;  // specify the start page


//then create a test and place your code there
test('My first test', async t => {
   
    await examplePage.inputName('Shan Liu');
    await examplePage.selectFeature('Support for testing on remote devices');
    await examplePage.selectFeature('Advanced traffic and markup analysis');
    await examplePage.submit();

    await t.expect(thankYouPage.getTitle).eql('Thank you, Shan Liu!')
    // await t
    //     .typeText('#developer-name', 'John Smith')
    //     .click('#submit-button')

    //     // Use the assertion to check if the actual header text is equal to the expected one
    //     .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

