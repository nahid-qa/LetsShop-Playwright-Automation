class OrderdetailsPage{

constructor(page){
    this.orderId= page.locator(".col-text");
    this.Billingaddress = page.locator(".row .address").first();
    this.Deliveryaddress = page.locator(".row .address").last();
    this.productName = page.locator(".title");

}
async getOrderID(){
    const orderId = await this.orderId.textContent();
    return orderId;

}
async getBillingEmail(){
    const billingEmailid = await this.Billingaddress.locator(".text").nth(0).textContent();
    return billingEmailid.trim();
}

async getBillingCountry(){
    const billingCountry= await this.Billingaddress.locator(".text").nth(1).textContent();
    return billingCountry;
}

async getDeliveryEmail(){
    const billingEmailid = await this.Deliveryaddress.locator(".text").nth(0).textContent();
    return billingEmailid.trim();
}

async getDeliveryCountry(){
    const billingCountry= await this.Deliveryaddress.locator(".text").nth(1).textContent();
    return billingCountry;
}

async getProductName(){
    const productName = await this.productName.textContent();
    return productName.trim();

}

}

module.exports = {OrderdetailsPage}