describe('Covers login test ceases', () => {
    it('', () => {
        //...
    })
})

beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
})
const username_path = '[data-test=username]';
const password_path = '[data-test=password]';
const username = 'standard_user';
const password = 'secret_sauce';
const login_button = '#login-button';

it('Successfull login', () => {
    cy.get(username_path).type(username);
    cy.get(password_path).type(password);
    cy.get(login_button).click()

    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html') //checks if User is redirected to a proper page
    cy.get('.product_label').should('be.visible'); //checks if '.product_label' is visible after login
    cy.get('#item_4_title_link > .inventory_item_name').should('have.class', 'inventory_item_name');//checks if first 'inventory_item' has proper class
})

it('Incorrect password', () => {
    const password_incorrect = 'secret_sauce_1';
    cy.get(username_path).type(username);
    cy.get(password_path).type(password_incorrect);
    cy.get(login_button).click()

    cy.url().should('contain', 'https://www.saucedemo.com/') //checks if the user stays on the login page
    cy.get('[data-test=error]')
    .should('have.text', 'Epic sadface: Username and password do not match any user in this service') // checks if proper message error is displayed
})

it('Empty fields', () => {
    
    cy.get(login_button).click()

    cy.url().should('contain', 'https://www.saucedemo.com/') //checks if the user stays on the login page
    cy.get('[data-test=error]')
    .should('have.text', 'Epic sadface: Username is required')// checks if proper message error is displayed
})