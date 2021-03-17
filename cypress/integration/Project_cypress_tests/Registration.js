describe('Covers registration test ceases', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  })
  it('Successfull registration', () => {
  // getting data from an external file
  // getting random name and lastname from the file
  // typing random values into registration form
    cy.fixture("names.json").then((credentials) => {

    const random_name = Math.floor(Math.random() * (credentials.data_json).length);
    const random_lastname = Math.floor(Math.random() * (credentials.data).length);

    cy.get('#firstName').type(credentials.data_json[random_name]);
    cy.get('#lastName').type(credentials.data[random_lastname]);

  // typing random email into registration form
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var first_part = '';
    for(var ii=0; ii<8; ii++){
      first_part += chars[Math.floor(Math.random() * chars.length)];
    }
    var random_email = first_part + '@domain.com'
      cy.get('#userEmail').type(random_email);

  // picking random radio button
    const male_radio = '#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label'
    const female_radio = '#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label'
    const other_radio = '#genterWrapper > .col-md-9 > :nth-child(3) > .custom-control-label'
    const array_radio = [male_radio, female_radio, other_radio]
    const random_radio = Math.floor(Math.random() * array_radio.length);
    cy.get(array_radio[random_radio]).click()

  // gettting random phone
    var digits = Math.floor(Math.random() * 9000000000) + 1000000000;
    cy.get('#userNumber').type(digits)
  
  // picking date from calendar widget
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__navigation--next').click()
    cy.get('.react-datepicker__day--030').click()

  // subjects and hobbies
    cy.get('.subjects-auto-complete__value-container').type('subjects_tests');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
  
  // typing address as random string
  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
    var random_text = makeid(10)
    cy.get('#currentAddress').type(random_text);
    
  // state dropdowns
    cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-3-option-2').click()
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click()
    cy.get('#react-select-4-option-0').click()

  //clicking submit button
    cy.get('#submit').click()

  


    })
  })
})