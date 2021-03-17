describe('Handling variety of elements on the website', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com')
    cy.get('.category-cards > :nth-child(1)').click()
  })
  it('How to handle Check Box?', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
    cy.get('.rct-option-expand-all > .rct-icon').click() //expanding the list
    cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click()
    cy.get(':nth-child(4) > .rct-text > label > .rct-checkbox > .rct-icon').dblclick()//checking and unchecking
  })
})
  //to be continued//