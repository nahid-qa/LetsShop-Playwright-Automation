class LoginPage {
    constructor(page) {

        // Locators for the elements on the login page
        this.page = page;
        this.userEmail = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.loginButton = page.locator('#login');
        this.successfulLoginMessage = page.locator('[aria-label = "Login Successfully"]');
        this.loginErrorlocator = page.locator('[role="alert"]');
        this.emailRequiredFieldError = page.getByText("*Email is required");
        this.passwordRequiredFieldError = page.getByText("*Password is required");


    }


    // Get all required feilds error messages on login page.
    async getRequiredFieldErrorMessages() {

        await this.loginButton.click();
        const emailErrorMessage = await this.emailRequiredFieldError.textContent();
        const passwordErrorMessage = await this.passwordRequiredFieldError.textContent();
        const requiredFeildErrorMessage = {
            "emailError": emailErrorMessage,
            "passwordError": passwordErrorMessage
        }
        return requiredFeildErrorMessage;
    }

    // Navigates to the login page.
    async landingUrl() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(email, password) {
        await this.userEmail.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState("networkidle");
    }

    // Fill login email and password in the login page.
    async fillLoginEmailandPassword(loginEmail, password) {

        await this.userEmail.fill(loginEmail);
        await this.password.fill(password);

    }

    // Returns successful login message.
    async loginandCaptureSuccessfulLoginMessage() {
        await this.loginButton.click();
        return this.successfulLoginMessage;
    }

    // returns login error messages.
    async loginandCaptureErrorMessage() {
        await this.loginButton.click();
        return this.loginErrorlocator.textContent();
    }

    // returns missing email error message.
    async missingEmailErrorMessage() {
        await this.loginButton.click();
        const ErrorMessage = await this.emailRequiredFieldError.textContent();
        return ErrorMessage;
    }

    // returns missing password error message.
    async missingPasswordErrorMessage() {
        await this.loginButton.click();
        const ErrorMessage = await this.passwordRequiredFieldError.textContent();
        return ErrorMessage;
    }
}
module.exports = { LoginPage };