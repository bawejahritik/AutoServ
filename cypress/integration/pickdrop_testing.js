// pickdrop_testing.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('pickdrop', () => {

    it('successfully loads', () => {
        cy.visit('http://localhost:4200/Tracking-page') // change URL to match your dev URL
      })

    it('successfully pressed request pickdrop', () => {
        cy.get('#pickdrop').click()
    })
  
    it('successfully pressed amount', () => {
      cy.wait(1000)
      cy.get('#amount').click()
    })
  
  })