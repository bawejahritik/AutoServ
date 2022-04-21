// Homepage_testing.js created with Cypress
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

    
    it('Successfully pressed Login',()=>{
        cy.wait(1000)
        cy.get('a:contains("Login")').click()
    })

    it('Successfully pressed Schedule',()=>{
        cy.wait(1000)
        cy.get('a:contains("Schedule")').click()
    })

    it('Successfully pressed Services',()=>{
        cy.wait(1000)
        cy.get('a:contains("Services")').click()
    })

    it('Successfully pressed Home',()=>{
        cy.wait(1000)
        cy.get('a:contains("Home")').click()
    })

    it('Successfully pressed Track',()=>{
      cy.wait(1000)
      cy.get('a:contains("Track")').click()
    })

  })