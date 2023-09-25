import CommonElements from "./common_page_elements/common_elements"

const commonElements = new CommonElements()

class InventoryPage {

    getAddToCartSauceLabsBikeLite() {
        return cy.xpath('//button[@name=\'add-to-cart-sauce-labs-bike-light\']')
    }

    getHeader() {
        return commonElements.getHeader()
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

    getProductsToAddToCart() {
        const productsToAddToCart = []
        productsToAddToCart.push(cy.xpath('//button[@id=\'add-to-cart-sauce-labs-backpack\']'))
        productsToAddToCart.push(cy.xpath('//button[@id=\'add-to-cart-sauce-labs-fleece-jacket\']'))
        productsToAddToCart.push(cy.xpath('//button[@id=\'add-to-cart-sauce-labs-onesie\']'))
        
        return productsToAddToCart
    }
}

export default InventoryPage