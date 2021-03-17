describe('Conditional testing of DOM elements example', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/')
})
it('If statement is true - Element', () => {
    cy.title().should('eq', 'ToolsQA')
    cy.get('body').then((body) => {
        if (body.find('.category-cards > :nth-child(1)').length > 0) {
            cy.get('.category-cards > :nth-child(1)').click()
        }
        else {
            cy.get('.category-cards > :nth-child(2)').click()
        }
    })
    cy.title().should('eq', 'ToolsQA')
})
it('If statement is false - Forms', () => {
    cy.title().should('eq', 'ToolsQA')
    cy.get('body').then((body) => {
        if (body.find('wrong_loc').length > 0) {
            cy.get('.category-cards > :nth-child(1)').click()
        }
        else {
            cy.get('.category-cards > :nth-child(2)').click()
        }
    })
    cy.title().should('eq', 'ToolsQA')
})
})