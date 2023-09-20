import LoginPage from "../pages/login_page";

const loginPage = new LoginPage()

class BaseActions {

    logInToSauceDemo(userName) {
        loginPage.getUserNameInput().type(userName)
                loginPage.getPasswordInput().type(Cypress.env('password'))
                loginPage.getLoginButton().click()
    }

}

export default BaseActions