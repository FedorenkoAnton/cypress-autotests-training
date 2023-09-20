
class InventoryPage {

    getAddToCartSauceLabsBikeLite() {
        return cy.xpath('//button[@name=\'add-to-cart-sauce-labs-bike-light\']')
    }

    getCartButton() {
        return cy.xpath('//div[@id=\'shopping_cart_container\']/a[@class=\'shopping_cart_link\']')
    }

    getSortingOptionsDropdown() {
        return cy.xpath('//select[@class=\'product_sort_container\']')
    }

    getProductTitles() {
        return cy.xpath('//div[@class=\'inventory_item_name\']')
    }

    getProductPrices() {
        return cy.xpath('//div[@class=\'inventory_item_price\']')
    }
}

export default InventoryPage