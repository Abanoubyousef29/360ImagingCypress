Cypress.Commands.add('redirectToURL',()=>{
    cy.visit(Cypress.config().baseUrl)
  })

  Cypress.Commands.add('getRegisterButton',()=>{
    cy.get('#submitAccount > span')
  })

  Cypress.Commands.add('getHomeTittle',()=>{
    cy.get('.page-heading')
  })

  Cypress.Commands.add('getErrorTittle',()=>{
    cy.get('.alert > p')
  })

  