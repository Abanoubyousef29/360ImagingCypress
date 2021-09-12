/// <reference types="Cypress" />
function generateRandomString() {
    let text = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
    for(let i = 0; i < 6; i++) 
    text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    return text;
  }

  const randomString = generateRandomString()+"@gmail.com"; 


Given('User Can Visit Website', () =>{
    
    cy.redirectToURL()
    cy.wait(Cypress.env("timeout"));
  
})

When('User Can Click on {string} Button', (button) =>{
    
    cy.get('.'+button).click()
})

When('User Enter Random Email To {string} with firstname {string}', (TextBox,firstname) =>{
    
    cy.get('#'+TextBox).type(firstname + randomString)
})

When('User Fill The TextBox {string} With {string}', (TextBox,value) =>{
    
    cy.get('#'+TextBox).type(value)
})

When('User Select {string} from dropdown menu {string}', (value,TextBox) =>{
    
    cy.get('#'+TextBox).select(value)
})

When('User Click on Register button', () =>{
    
    cy.getRegisterButton().click()
})

Then('New Page Open With Tittle {string}', (TittleName) =>{
    
    cy.getHomeTittle().should('include.text',TittleName)
})

Then('New Page Open With error Tittle {string}', (TittleError) =>{
    
    cy.getErrorTittle().should('include.text',TittleError)
})

Then('User Can Log Out', (TittleError) =>{
    
    cy.get('.logout').click()
})