// AppointmentForm_testing.js created with Cypress
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

describe('Appointment Form', () => {

  it('successfully loads', () => {
    cy.visit('http://localhost:4200') // change URL to match your dev URL
  })

  it('successfully pressed schedule', () => {
    cy.wait(1000)
    cy.get('#Schedule').click()
  })

  it('successfully filled first name', () =>{
    cy.wait(1000)
    cy.get("#firstName").type("cypress")
  })

  it('successfully filled last name', () =>{
    cy.wait(1000)
    cy.get("#lastName").type("test")
  })

  it('successfully filled phone number', () =>{
    cy.wait(1000)
    cy.get("#phoneNumber").type("123456789")
  })

  it('successfully filled email', () =>{
    cy.wait(1000)
    cy.get("#email").type("cypress@email.com")
  })

  it('successfully filled registration number', () =>{
    cy.wait(1000)
    cy.get("#registrationNumber").type("987654321")
  })

  it('successfully selected service type interim', () =>{
    cy.wait(1000)
    cy.get("#interim").click()
  })

  it('successfully selected service type full', () =>{
    cy.wait(1000)
    cy.get("#full").click()
  })

  it('successfully selected service type major', () =>{
    cy.wait(1000)
    cy.get("#major").click()
  })

  it('successfully filled appointment data', () =>{
    cy.wait(1000)
    cy.get("#date").type("05/25/2022")
  })

  it('successfully pressed submit', () =>{
    cy.wait(1000)
    cy.get("#submit").click()
  })

  it('successfully pressed clear', () =>{
    cy.wait(1000)
    cy.get("#clear").click()
  })

  it('successfully pressed need help', () =>{
    cy.wait(1000)
    cy.get("#needHelp").click()
  })

})