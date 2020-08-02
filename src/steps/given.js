import { Given } from 'cucumber';

import checkContainsText from '../support/check/checkContainsText';
import openWebsite from '../support/action/openWebsite';

Given('user launches weather forecast website', () => {
    openWebsite('url', 'http://localhost:3000');
    checkContainsText('element', '//h1', null, 'Five Day Weather Forecast for');
});
