class LoginPage {
   
    getUserNameInput() {
        return cy.xpath('//input[@placeholder=\'Username\']')
    }

    getPasswordInput() {
        return cy.xpath('//input[@placeholder=\'Password\']')
    }

    getLoginButton() {
        return cy.xpath('//input[@id=\'login-button\']')
    }   
}

export default LoginPage


