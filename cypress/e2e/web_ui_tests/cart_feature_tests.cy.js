import 'cypress-xpath'
import LoginPage from './pages/login_page'
import InventoryPage from './pages/inventory_page'
import CartPage from './pages/cart_page'
import BaseActions from './actions/base_actions'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()
const baseActions = new BaseActions()

describe('Cart feature tests', ()=>{

    beforeEach(()=> {
        cy.visit('/')
    })

    it('Assert that added products are in the cart', ()=> {
        cy.fixture('standard_user.json').then((standardUser)=> {
            const {username} = standardUser
            const expectedProductsInCart = ['Sauce Labs Backpack', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie']

            baseActions.logInToSauceDemo(username)
            inventoryPage.getProductsToAddToCart().forEach((addToCartButton)=> {
                addToCartButton.click()
            })
            inventoryPage.getHeader().getCartLink().click()

            const titlesOnCartPage = []
            cartPage.getProductsTitles().each(($titles)=> {
                titlesOnCartPage.push($titles.text())
            })
            .then(()=> {
                cy.wrap(titlesOnCartPage).should('deep.equal', expectedProductsInCart)
            })
        })
    })

    it('Assert that previously added products' + 
    'are absent on cart page after they were removed', ()=> {
        cy.fixture('standard_user.json').then((standardUser)=> {
            const {username} = standardUser

            baseActions.logInToSauceDemo(username)
            inventoryPage.getProductsToAddToCart().forEach((addToCartButton)=> {
                addToCartButton.click()
            })
            inventoryPage.getHeader().getCartIconBadge().should('have.text', '3')
            inventoryPage.getHeader().getCartLink().click()

            cartPage.getProductsRemoveButton().each(($button)=> {
                cy.wrap($button).click()
            })
            cartPage.getHeader().getCartIconBadge().should('not.exist')
        })
    })
})