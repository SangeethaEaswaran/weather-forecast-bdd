import isDisplayed from '../support/check/isDisplayed';
import pause from '../support/action/pause';

const { Then } = require('cucumber');

const day = {
    Tue: '1',
    Wed: '2',
    Thu: '3',
    Fri: '4',
    Sat: '5',
};

Then('user should be displayed with error message', () => {
    isDisplayed('//div[@data-test="error" and contains(text(), "Error retrieving the forecast")]',
        null);
});

Then('user should be displayed with 5 day weather forecast', () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(day)) {
        isDisplayed(`//span[@data-test="day-${value}" and contains(text(),"${key}")]`, null);
    }
});

Then(/^user should be displayed with below summary details$/, (table) => {
    const data = table.rowsHash();
    const dayNumber = day[data.dayName];
    isDisplayed(`//span[@data-test="day-${dayNumber}" and contains(text(),"${data.dayName}")]`,
        null);

    isDisplayed(`//div[@class="summary"]//span[contains(text(),"${data.dayName}")]//ancestor::span/
    following::span//*[name()="svg" and @data-test="description-${dayNumber}"]
    //*[name()="path" and @class="${data.currentCondition}"]`, null);

    isDisplayed(`//div[@class="summary"]//span[contains(text(),"${data.dayName}")]//ancestor::span/
    following::span//span[@data-test="maximum-${dayNumber}"
    and contains(text(),"${data.maxTemp}")]`, null);

    isDisplayed(`//div[@class="summary"]//span[contains(text(),"${data.dayName}")]//ancestor::span/
    following::span//span[@data-test="minimum-${dayNumber}"
    and contains(text(),"${data.minTemp}")]`, null);

    isDisplayed(`//div[@class="summary"]//span[contains(text(),"${data.dayName}")]//ancestor::span/
    following::span//span[@data-test="speed-${dayNumber}"
    and contains(text(),"${data.currentWindSpeed}")]`, null);

    isDisplayed(`//div[@class="summary"]//span[contains(text(),"${data.dayName}")]//ancestor::span/
    following::span//span[@data-test="rainfall-${dayNumber}"
    and contains(text(),"${data.rainfall}")]`, null);

    isDisplayed(`//div[@class="summary"]//span[contains(text(),"${data.dayName}")]//ancestor::span/
    following::span//span[@data-test="pressure-${dayNumber}"
    and contains(text(),"${data.pressure}")]`, null);
});

Then(
    /^three hourly weather forecast for (.*) should (be|not be) displayed$/,
    (dayName, action) => {
        pause('1000');
        isDisplayed(`//span[contains(text(),"${dayName}")]//ancestor::div[@class="summary"]/
        following::div[1][@class="details"]`,
        (action === 'not be') ? true : null);
    }
);
