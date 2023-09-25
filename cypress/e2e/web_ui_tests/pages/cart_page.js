import CommonElements from "./common_page_elements/common_elements"

const commonElements = new CommonElements()

class CartPage{
    
    getCheckoutButton() {
        return cy.xpath('//button[@id=\'checkout\']')
    }

    getProductsTitles() {
        return cy.xpath('//div[@class=\'inventory_item_name\']')
    }

    getProductsRemoveButton() {
        return cy.xpath('//div//button[contains(text(), \'Remove\')]')
    }
    
    getHeader() {
        return commonElements.getHeader()
    }
}

export default CartPage