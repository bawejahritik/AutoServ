// signup_testing.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('signup', () => {

    it('successfully loads', () => {
      cy.visit('http://localhost:4200/Signup') // change URL to match your dev URL
    })
  
    it('successfully filled username', () =>{
      cy.wait(1000)
      cy.get("#firstName").type("Cypress")
    })
    
    it('successfully filled lastName', () =>{
        cy.wait(1000)
        cy.get("#lastName").type("lastCypress")
    })

    it('successfully filled phoneNumber', () =>{
        cy.wait(1000)
        cy.get("#phoneNumber").type("123456789")
    })

    it('successfully filled email', () =>{
        cy.wait(1000)
        cy.get("#email").type("Cypress@test.com")
    })

    it('successfully filled password', () =>{
        cy.wait(1000)
        cy.get("#password").type("passCypress")
      })

    it('successfully pressed submit', () => {
        cy.get('#submit').click()
    })

  })