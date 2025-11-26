class OrderPage {

    // Locators for the elements on the order page
    constructor(page) {
        this.page = page;
        this.creditFormFeilds = page.locator(".form__cc input");
        this.creditCardNumber = page.locator(".form__cc input.text-validated");
        this.expiryDate = page.locator("select");
        this.applyCoupon = page.locator("button[type='submit']");
        this.enteredEmail = page.locator(".mt-5 [style*='gray']");
        this.country = page.locator('[placeholder="Select Country"]');
        this.dropDownResults = page.locator(".ta-results");
        this.placeOrderButton = page.locator(".btnn");

    }
    // Fills creditcard information and apply coupon.
    async FillCCInfo(creditCard) {

        await this.creditCardNumber.fill(creditCard);
        await this.expiryDate.first().selectOption("12");
        await this.expiryDate.last().selectOption("25");
        await this.creditFormFeilds.nth(1).fill("666");
        await this.creditFormFeilds.nth(2).fill("TestingCard");
        await this.creditFormFeilds.nth(3).fill("rahulshettyacademy");
        await this.applyCoupon.click();
        await this.country.waitFor();
        await this.page.getByText('* Coupon Applied').waitFor();

    }

    // Fills shipping information on order page.
    async ShippingInfo(email) {
        const enteredEmail = await this.enteredEmail.textContent();
        //expect(enteredEmail).toEqual(email);
        await this.page.waitForLoadState('networkidle');
        await this.country.waitFor();

        await this.country.focus();
        await this.country.pressSequentially('ind', { delay: 100 });
        await this.dropDownResults.waitFor();
        const options = await this.dropDownResults.locator("button").count();

        for (let i = 0; i < options; ++i) {
            const text = await this.dropDownResults.locator("button").nth(i).textContent();

            if (text === " India") {
                await this.dropDownResults.locator("button").nth(i).click();
                break;
            }
        }


    }

    // places order
    async PlaceOrder() {
        await this.placeOrderButton.click();
    }


}
module.exports = { OrderPage }
