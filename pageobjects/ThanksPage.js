class ThanksPage {
    constructor(page) {
        this.thankyouTxt = page.locator(".hero-primary");
        this.productName = page.locator(".m-3 div");
        this.orderId = page.locator(".em-spacer-1 label");

    }
async getThankyouTxt(){
    const thankyouTxt = await this.thankyouTxt.textContent();
    return thankyouTxt;
}

async getProductName(){
     const productNametxt =  await this.productName.first().textContent();
     return productNametxt;
}
    async GetOrderID() {
       
        const orderIdString = await this.orderId.last().textContent();
        const trimmedorderIdString = orderIdString.trim();
        const orderIdTemp = trimmedorderIdString.replace(/\|/g, "");
        const orderId = orderIdTemp.replace(/\ /g, "")
        //const orderId= '691530cd5008f6a9091b3b98';
        console.log(orderId);
        return orderId;
    }

}
module.exports = {ThanksPage};