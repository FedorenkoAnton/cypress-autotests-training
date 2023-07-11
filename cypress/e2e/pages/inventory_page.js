class InventoryPage {

    getAddToCartSauceLabsBikeLite() {
        return cy.xpath('//button[@name=\'add-to-cart-sauce-labs-bike-light\']')
    }

    getCartButton() {
        return cy.xpath('//div[@id=\'shopping_cart_container\']/a[@class=\'shopping_cart_link\']')
    }
}

export default InventoryPage