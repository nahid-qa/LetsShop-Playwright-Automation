const { LoginPage } = require("./LoginPage")
const { RegistrationPage } = require("./RegistrationPage")
const { DashboardPage } = require("../pageobjects/DashboardPage");
const { CartPage } = require("../pageobjects/CartPage");
const { OrderPage } = require("../pageobjects/OrderPage");
const { ThanksPage } = require("../pageobjects/ThanksPage");
const { MyOrdersPage } = require("./MyOrdersPage");
const { orderdetailsPage } = require("../pageobjects/OrderdetailsPage");


class POmanager {
    constructor(page) {
        this.page = page;
        this.registrationPage = new RegistrationPage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(page);
        this.cartPage = new CartPage(page);
        this.orderPage = new OrderPage(page);
        this.myOrdersPage = new MyOrdersPage(page);
        this.thanksPage = new ThanksPage(page);
    }
    
    getRegistrationPage() {
        return this.registrationPage;

    }
    getLoginPage() {
        return this.loginPage;

    }

    getDashboardPage() {
        return this.dashboardPage;

    }
     getCartPage() {
        return this.cartPage;

    }
    getOrderPage() {
        return this.orderPage;

    }
    getThanksPage() {
        return this.thanksPage;

    }
    getMyordersPage() {
        return this.myOrdersPage;

    }

}

module.exports = { POmanager };