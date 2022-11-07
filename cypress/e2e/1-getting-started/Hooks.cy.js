/// <reference types="Cypress"/>
///  <reference types="cypress-iframe" />

import 'cypress-iframe'

//Tutorial-43
describe('Tutorial-43-Hooks Explaination', function () {

    before(function () {
        cy.log("This is before function");
        cy.visit('https://ui.cogmento.com');
        cy.get("input[name='email']").type("rahulscreencast9892@gmail.com");
        cy.get("input[name='password']").type("Ra987456321@"); 
        cy.contains("Login").click(); 
        //cy.contains("Sign in").click(); 
    })

    beforeEach(function () {
        cy.log("This is beforeEach hook ")
        
    })

    it('Iframe hendeling', function () {
        cy.get("i[class='users icon']").click();
        cy.get("a[href='/contacts/new']").click(); 



    })

})

