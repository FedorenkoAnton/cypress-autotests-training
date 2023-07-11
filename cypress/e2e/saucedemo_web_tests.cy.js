import 'cypress-xpath'
import LoginPage from './pages/login_page'
import InventoryPage from './pages/inventory_page'
import CartPage from './pages/cart_page'
import CheckoutStepOnePage from './pages/checkout_step_one_page'
import CheckoutStepTwoPage from './pages/checkout_step_two_page'
import CheckoutCompletePage from './pages/checkout_complete_page'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()
const checkoutStepOnePage = new CheckoutStepOnePage()
const checkoutStepTwoPage = new CheckoutStepTwoPage()
const checkoutCompletePage = new CheckoutCompletePage()

describe('Checkout goods on \'saucedemo\'', () => {
  it('Checkout', () => {
    cy.fixture('standart_user.json').then((standartUser) => {
      const {username, firstName, lastName, postalCode} = standartUser
      const COMPLETE_HEADER = 'Thank you for your order!'
      
      cy.visit('/')
      loginPage.getUserNameInput().type(username)
      loginPage.getPasswordInput().type(Cypress.env('password'))
      loginPage.getLoginButton().click()

      inventoryPage.getAddToCartSauceLabsBikeLite().click
      inventoryPage.getCartButton().click()
      
      cartPage.getCheckoutButton().click()

      checkoutStepOnePage.getFirstNameField().type(firstName)
      checkoutStepOnePage.getLastNameField().type(lastName)
      checkoutStepOnePage.getPostalCode().type(postalCode)
      checkoutStepOnePage.getContinueButton().click()

      checkoutStepTwoPage.getFinishButton().click()

      checkoutCompletePage.getCompleteHeader() .should('have.text', COMPLETE_HEADER)
    })
  })
})