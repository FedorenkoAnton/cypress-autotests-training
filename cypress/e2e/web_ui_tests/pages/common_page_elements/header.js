const cartLinkXPath = '//a[@class=\'shopping_cart_link\']'

class Header {
    getHamburgerMenu() {
        return cy.xpath('//div[@class=\'bm-burger-button\']')
    }

    getLogo() {
        return cy.xpath('//div[@class=\'app_logo\']')
    }

    getCartLink() {
        return cy.xpath(cartLinkXPath)
    }

    getCartIconBadge() {
        return cy.xpath(cartLinkXPath.concat('//span[@class=\'shopping_cart_badge\']'))
    }
}

export default Header