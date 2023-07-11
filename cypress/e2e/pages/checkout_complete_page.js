class CheckoutCompletePage {
    getCompleteHeader() {
        return cy.xpath('//h2[@class=\'complete-header\']')
    }
}

export default CheckoutCompletePage