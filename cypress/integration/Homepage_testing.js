// Homepage_testing.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:4200') // change URL to match your dev URL
    })

    it('successfully pressed schedule', () => {
        cy.wait(1000)
        cy.get('#Schedule').click()
    })

    // it('successfully pressed home in navbar'), () => {
    //     cy.get('Home').click()
    // }

    it('successfully loads', () => {
        cy.visit('http://localhost:4200') // change URL to match your dev URL
      })

    it('successfully pressed track', () => {
        cy.wait(1000)
        cy.get('#Track').click()
    })
  })