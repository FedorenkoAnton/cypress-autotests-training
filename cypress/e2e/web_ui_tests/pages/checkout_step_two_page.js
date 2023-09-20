class CheckoutStepTwo {

    getFinishButton() {
        return cy.xpath('//button[@id=\'finish\']')
    }
}

export default CheckoutStepTwo