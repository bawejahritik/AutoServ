// services_testing.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Services Page', () => {

    it('successfully loads', () => {
        cy.visit('http://localhost:4200') // change URL to match your dev URL
    })


    it('Successfully pressed Services',()=>{
        cy.wait(1000)
        cy.get('a:contains("Services")').click()
    })

    it("pressed interim book now", () => {
        cy.wait(1000)
        cy.get('#interimBook').click()
    })

    it('Successfully pressed Services',()=>{
        cy.wait(1000)
        cy.get('a:contains("Services")').click()
    })

    it("pressed major book now", () => {
        cy.wait(1000)
        cy.get('#majorBook').click()
    })

    it('Successfully pressed Services',()=>{
        cy.wait(1000)
        cy.get('a:contains("Services")').click()
    })

    it("pressed full book now", () => {
        cy.wait(1000)
        cy.get('#fullBook').click()
    })



})