class CartPage {
    constructor(page) {
        this.productList = page.locator("div li");
        this.page = page;
        this.checkoutButton = page.locator("text=Checkout");

    }

    async CheckOutButton(productName) {
        const orderedProductName = this.page.locator(`h3:has-text("${productName}")`);
        await this.productList.first().waitFor({ state: "visible" });
        await this.checkoutButton.click();
    }
    

}
module.exports = { CartPage }