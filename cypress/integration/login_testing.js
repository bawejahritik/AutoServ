// login_testing.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('login', () => {

    it('successfully loads', () => {
      cy.visit('http://localhost:4200/Login') // change URL to match your dev URL
    })
  
    it('successfully filled username', () =>{
      cy.wait(1000)
      cy.get("#Username").type("Cypress")
    })

    it('successfully filled password', () =>{
        cy.wait(1000)
        cy.get("#password").type("passCypress")
      })

    it('successfully pressed submit', () => {
        cy.get('#submit').click()
    })

  })