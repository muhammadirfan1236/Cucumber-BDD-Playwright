
export class ProductsPage {

    constructor(page) {

        this.page = page;

        // Locators
        this.pageTitle = page.locator('.title');

    }

    // Actions / Methods

    async getPageTitle() {

        await this.pageTitle.waitFor();

        return await this.pageTitle.textContent();

    }

}
