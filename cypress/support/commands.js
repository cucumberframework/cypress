// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import LoginPage from "../e2e/1-getting-started/PageObject/LoginPage.cy"

  const login=new LoginPage();


 Cypress.Commands.add('LoginIntoApp', (url,email, password) => {
    cy.visit(url);
    login.getEmail().type(email);
    //cy.pause()                                  //this will pause the execution and to resume the execution we need to click on the play button from the cypress dashboard
   login.getpassword().type(password);
     login.getClickButton().click();
    cy.get("i[class='users icon']").click();
    cy.get("a[href='/contacts/new']").click(); 
  

  })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
