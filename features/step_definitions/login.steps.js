
import {
    Given,
    When,
    Then
} from '@cucumber/cucumber';

import assert from 'node:assert/strict';


Given('user is on the login page', async function () {

    await this.loginPage.navigateToLoginPage();

});


When('user enters username {string} and password {string}', async function (username, password) {

    await this.loginPage.enterUsername(username);

    await this.loginPage.enterPassword(password);

});


When('user clicks on the login button', async function () {

    await this.loginPage.clickLoginButton();

});


Then('user should be redirected to the products page', async function () {

    await this.page.waitForURL('**/inventory.html');

    const actualTitle = await this.productsPage.getPageTitle();

    assert.equal(actualTitle, 'Products');

});


Then('user should see an error message', async function () {

    const actualError = await this.loginPage.getErrorMessage();

    assert.ok(actualError && actualError.trim().length > 0,
        'Expected an error message, but none was displayed');

});
