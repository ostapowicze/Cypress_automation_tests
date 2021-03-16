describe('Knowledge Base Application', () => {
    beforeEach(() => {
        //...
    })

it('test1', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.fixture("names.json").then((credentials) => {
    const random_name = Math.floor(Math.random() * (credentials.data_json).length);
    cy.get('#firstName').type(credentials.data_json[random_name]);

    })
      })
 
    })
