class DashboardPage {

    constructor(page) {
        this.allProductCards = page.locator(".card-body");
        this.firstProduct = page.locator(".card-body b");
        this.cart = page.getByText("Cart");
        this.messageAddedToCart = page.getByText("Product Added to Cart");
    }

    async SearchAndAddProductToCart(productName) {
        await this.firstProduct.first().waitFor();
        const count = await this.allProductCards.count();

        for (let i = 0; i < count; ++i) {

            if (await this.allProductCards.nth(i).locator("b").textContent() === productName) {
                await this.allProductCards.nth(i).locator("text= Add to Cart").click()
                break;
            }

        }
    }
    async AddToCart() {
        await this.cart.first().click();

    }
}
module.exports = {DashboardPage};