
export class LoginPage {

    constructor(page) {

        this.page = page;

        // Locators
        this.usernameInput = page.locator('[data-test="username"]');

        this.passwordInput = page.locator('[data-test="password"]');

        this.loginButton = page.locator('[data-test="login-button"]');

        this.errorMessage = page.locator('[data-test="error"]');

    }

    // Actions

    async navigateToLoginPage() {

        await this.page.goto('https://www.saucedemo.com/');

    }

    async enterUsername(username) {

        await this.usernameInput.fill(username);

    }

    async enterPassword(password) {

        await this.passwordInput.fill(password);

    }

    async clickLoginButton() {

        await this.loginButton.click();

    }

    async getErrorMessage() {

    return await this.errorMessage.textContent();

}

}


