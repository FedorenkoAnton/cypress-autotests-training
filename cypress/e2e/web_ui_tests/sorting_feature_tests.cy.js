import 'cypress-xpath'
import LoginPage from "./pages/login_page"
import InventoryPage from "./pages/inventory_page"
import SortOptions from './enums/sort_items_options'
import BaseActions from './actions/base_actions'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const baseActions = new BaseActions()

describe('Sort items on \'Inventory page\'', ()=> {

    beforeEach(()=> {
        cy.visit('/')
    })

    it('Sort by price from high to low', ()=> {
        cy.fixture('standard_user.json').then((standardUser)=> {
            const {username} = standardUser
            baseActions.logInToSauceDemo(username)
            inventoryPage.getSortingOptionsDropdown().select(SortOptions.FROM_HIGH_TO_LOW)
            
            let pricesOrderOnPage = []
            let expectedPricesOrder = []
            inventoryPage.getProductPrices().each(($price)=> {
                pricesOrderOnPage.push(parseFloat($price.text().replace(/[$]/, '')))
            })
            .then(()=> {
                expectedPricesOrder = pricesOrderOnPage.slice().sort(sortPricesInDescendingOrder)
                cy.wrap(pricesOrderOnPage).should('have.ordered.members', expectedPricesOrder)
            }) 
        })
    })

    it('Sort by price from low to high', ()=> {
        cy.fixture('standard_user.json').then((standardUser)=> {
            const {username} = standardUser
            baseActions.logInToSauceDemo(username)
            inventoryPage.getSortingOptionsDropdown().select(SortOptions.FROM_LOW_TO_HIGH)

            let pricesOrderOnPage = []
            let expectedPricesOrder = []
            inventoryPage.getProductPrices().each(($price)=> {
                pricesOrderOnPage.push(parseFloat($price.text().replace(/[$]/, '')))
            })
            .then(()=> {
                expectedPricesOrder = pricesOrderOnPage.slice().sort(sortPricesInAscendingOrder)
                cy.wrap(pricesOrderOnPage).should('have.ordered.members', expectedPricesOrder)
            })
        })
    })

    it('Sort products by titles from A to Z', ()=> {
        cy.fixture('standard_user.json').then((standardUser)=> {
            const {username} = standardUser
            baseActions.logInToSauceDemo(username)
            inventoryPage.getSortingOptionsDropdown().select(SortOptions.FROM_A_TO_Z)

            let titlesOnPage = []
            let expectedTitleOrder = []
            inventoryPage.getProductTitles().each(($title)=> {
                titlesOnPage.push($title.text())
            })
            .then(()=> {
                expectedTitleOrder = titlesOnPage.slice().sort()
                cy.wrap(titlesOnPage).should('have.ordered.members', expectedTitleOrder)
            })
        })
    })

    it('Sort products by titles from Z to A', ()=> {
        cy.fixture('standard_user.json').then((standardUser)=> {
            const {username} = standardUser
            baseActions.logInToSauceDemo(username)
            inventoryPage.getSortingOptionsDropdown().select(SortOptions.FROM_Z_TO_A)

            let titlesOnPage = []
            let expectedTitlesOrders = []
            inventoryPage.getProductTitles().each(($title)=> {
                titlesOnPage.push($title.text())
            })
            .then(()=> {
                expectedTitlesOrders = titlesOnPage.slice().sort(sortTitlesDescendingOrder)
                console.log(titlesOnPage)
                console.log(expectedTitlesOrders)
                cy.wrap(titlesOnPage).should('have.ordered.members', expectedTitlesOrders)
            })
        })
    })
})

function sortPricesInDescendingOrder(num1, num2) {
    return (num1 - num2) * -1
}

function sortPricesInAscendingOrder(num1, num2) {
    return  num1 - num2
}

function sortTitlesDescendingOrder(title1, title2) {
    return title1.localeCompare(title2) * (-1)
}