const { orderdetailsPage, OrderdetailsPage } = require("./OrderdetailsPage");
class MyOrdersPage {
    constructor(page) {

        // Locators for the elements on the myorders page
        this.page = page;
        this.ordersButton = page.locator('button[routerlink$="myorders"]');
        this.rows = page.locator('tbody tr');
        this.tableBody = page.locator('tbody');

    }

    // Click Orders button and navigate to my orders page.
    async myOrderLandingPage() {
        await this.ordersButton.click();
    }

    // Search orderID in the my orders page and click on view button to validate details.
    async searchOrder(orderId) {

        await this.tableBody.waitFor();

        const numRows = await this.rows.count();
        for (let i = 0; i < numRows; ++i) {
            const orderIdText = await this.rows.locator('th').nth(i).textContent();
            if (orderIdText === orderId) {
                await this.rows.nth(i).locator('button').first().click();
                return new OrderdetailsPage(this.page);
            }


        }
    }

}
module.exports = { MyOrdersPage }