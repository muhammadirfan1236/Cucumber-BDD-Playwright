
import {
    Before,
    After
} from '@cucumber/cucumber';

import { chromium } from 'playwright';

import { LoginPage } from '../pages/LoginPage.js';

import { ProductsPage } from '../pages/ProductsPage.js';


Before(async function () {

    // Launch browser
    this.browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });

    // Create browser context
    this.context = await this.browser.newContext();

    // Create new page
    this.page = await this.context.newPage();

    // Initialize Page Objects
    this.loginPage = new LoginPage(this.page);

    this.productsPage = new ProductsPage(this.page);

});


After(async function () {

    await this.page.waitForTimeout(1000);

    await this.context?.close();

    await this.browser?.close();

});
