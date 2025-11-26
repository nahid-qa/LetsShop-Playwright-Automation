// This class represents the Registration Page of the application.
// It encapsulates all the locators and actions related to the registration functionality.

const { getSystemErrorMessage } = require("util");

class RegistrationPage {
    constructor(page, password) {
        // Locators for the elements on the registration page
        this.page = page;
        this.password = this.password;
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.userEmail = page.locator('#userEmail');
        this.userMobile = page.locator('#userMobile');
        this.occupationDropdown = page.locator('select');
        this.password = page.locator('#userPassword');
        this.confirmPassword = page.locator('#confirmPassword');
        this.ageconsentCheckBox = page.locator('input[type="checkbox"]');
        this.register = page.locator('#login');
        this.registrationMessage = page.locator('.headcolor');
        this.registrationErrorMessage = page.locator('[role="alert"]');
        this.registrationPageLoginbutton = page.locator('.btn-primary')
        this.successfulLoginMessage = page.locator('[aria-label = "Login Successfully"]');
        this.requiredFieldErrorMessage = page.getByText('is required');
        this.checkBoxErrorMessage = page.getByText('Please check above checkbox');

    }

    // Get all required feilds error messages.
    async getRequiredFieldErrorMessages() {

        const firstNameErrorMessage = await this.requiredFieldErrorMessage.nth(0).textContent();
        const emailErrorMessage = await this.requiredFieldErrorMessage.nth(1).textContent();
        const phoneNumberErrorMessage = await this.requiredFieldErrorMessage.nth(2).textContent();
        const passwordErrorMessage = await this.requiredFieldErrorMessage.nth(3).textContent();
        const confirmPasswordErrorMessage = await this.requiredFieldErrorMessage.nth(4).textContent();
        const ageConsentErrorMessage = await this.checkBoxErrorMessage.textContent();
        const requiredFeildErrorMessage = {
            "firstNameError": firstNameErrorMessage,
            "emailError": emailErrorMessage,
            "phoneNumberError": phoneNumberErrorMessage,
            "passwordError": passwordErrorMessage,
            "confirmPasswordError": confirmPasswordErrorMessage,
            "ageConsentError": ageConsentErrorMessage,
        }
        return requiredFeildErrorMessage;
    }

    // Creates and returns sample username and email for registration.
    getUserData(firstName, lastName) {

        function getRandomInt(min, max) {
            min = Math.ceil(min); // Ensure min is an integer
            max = Math.floor(max); // Ensure max is an integer
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const randomNumber = getRandomInt(1, 100);
        const userName = `${firstName}${randomNumber}`;
        const email = `${userName}.${lastName}@gmail.com`;
        const User = { "userName": userName, "email": email };
        return User;
    }
    //Returns sample 10 digit phone number.
    getValidPhoneNumber() {
        // Generate a random 10-digit Telephone number
        const areaCode = Math.floor(Math.random() * 900) + 100; // 100-999
        const prefix = Math.floor(Math.random() * 900) + 100; // 100-999
        const lineNumber = Math.floor(Math.random() * 9000) + 1000; // 1000-9999

        // Format the number into a common phone number format
        return `${areaCode}${prefix}${lineNumber}`;
    }

    // Navigates to the registration page.
    async getRegistrationLandingPage() {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/register');
    }

    //Selects dropdown value as per input provided.
    //Retrieves the text of selected dropdown value.
    //@returns {Promise<string|null>} The  selected dropdown text, or null if not found.

    async getoccupationDropdowValue(occupation) {
        await this.occupationDropdown.selectOption(occupation);
        return this.occupationDropdown.inputValue();

    }

    //Selects gender value as per input provided.
    //@returns bool value. true if button is checked.
    async genderRadioButton(gender) {
        await this.page.getByText(gender).click();
        return this.page.getByText(gender).isChecked();
    }

    //Checks age consent checkbox.
    //@returns bool value. true if checkbox is checked.
    async ageConsentCheckbox() {
        await this.ageconsentCheckBox.check();
        return await this.ageconsentCheckBox.isChecked();
    };

    //Clicks register button.
    async registerButton() {
        await this.register.click();
    }
    /**
       * Fills the First Name, Last Name, Email, Phone Number and Password and Confirm Password fields.
       * @param {string} firstName - The First Name to enter.
       * @param {string} lastName - The Last Name to enter.
       * @param {string} email - The Email to enter.
       * @param {string} userMobile - The Phone Number to enter.
       * @param {string} password - The Password to enter.
       * @returns {Promise<void>}
       */
    async fillNewUserRegistration(firstName, lastName, email, userMobile, password) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.userEmail.fill(email);
        await this.userMobile.fill(userMobile);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
    }

    //Captures and returs registration message.
    async afterRegistrationMessage() {
        const actualSuccessMessage = await this.registrationMessage.textContent();
        return actualSuccessMessage;
    }

    async duplicateEmailRegistrationMessage() {
        const actualErrorMessage = await this.registrationErrorMessage.textContent();
        return actualErrorMessage;
    }

    //Clicks to login button on registration page.
    async clickRegistrationPageLoginButtontoLogin() {
        await this.registrationPageLoginbutton.click();
    }



}
module.exports = { RegistrationPage };