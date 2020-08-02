import clearInputField from '../support/action/clearInputField';
import clickElement from '../support/action/clickElement';
import pressButton from '../support/action/pressButton';
import setInputField from '../support/action/setInputField';
import isDisplayed from '../support/check/isDisplayed';

const { When } = require('cucumber');

When(/^user inputs city as (.*)$/, (cityName) => {
    console.log('inside step def', cityName);
    clearInputField('//input[@data-test="city"]');
    setInputField('add', cityName, '//input[@data-test="city"]');
    pressButton('Enter');
});

When(/^user selects (.*) day$/, (dayName) => {
    console.log('inside step def', dayName);
    isDisplayed(`//span[contains(text(),"${dayName}")]`, null);
    clickElement('click', 'selector', `//span[contains(text(),"${dayName}")]`);
});
