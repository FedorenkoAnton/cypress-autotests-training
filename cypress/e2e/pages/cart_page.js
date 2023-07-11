class CartPage{
    
    getCheckoutButton() {
        return cy.xpath('//button[@id=\'checkout\']')
    }
}

export default CartPage