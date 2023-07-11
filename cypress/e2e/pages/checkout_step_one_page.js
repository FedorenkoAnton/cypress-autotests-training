class CheckoutStepOnePage {

    getFirstNameField() {
        return cy.xpath('//input[@id=\'first-name\']')
    }

    getLastNameField() {
        return cy.xpath('//input[@id=\'last-name\']')
    }

    getPostalCode() {
        return cy.xpath('//input[@id=\'postal-code\']')
    }

    getContinueButton() {
        return cy.xpath('//input[@id=\'continue\']')
    }
}

export default CheckoutStepOnePage