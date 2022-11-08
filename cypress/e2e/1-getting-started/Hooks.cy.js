/// <reference types="Cypress"/>
///  <reference types="cypress-iframe" />

import 'cypress-iframe'

//Tutorial-43
describe('Tutorial-43-Hooks Explaination', function () {

   

    beforeEach(function () {
        /* code for fixtures- -taking data from external files  */
        cy.fixture("loginns").then(function (loginData) {
            this.loginData = loginData;
        })
        

    })

    it('Creating new contact', function () {

        cy.log("This is before function");
        cy.visit(this.loginData.url);
        cy.get("input[name='email']").type(this.loginData.email);
        cy.get("input[name='password']").type(this.loginData.password);
        cy.contains("Login").click();
        cy.get("i[class='users icon']").click();
        cy.get("a[href='/contacts/new']").click();
        cy.get("input[name='first_name']").type(this.loginData.FirstName)

        /* below line will get the attribute value and will compare if that value is equal or not-- i.e get the value of the attribute and compare it with the expected one  */
        
        cy.get("input[name='first_name']").should("have.attr", "autocomplete", "new-password");
        cy.get("input[name='last_name']").type(this.loginData.LastName); 
        cy.get("input[name='middle_name']").type(this.loginData.MiddleName)
        cy.get("div[name='company']").type(this.loginData.Company);
        cy.contains("Save").click();

    })

})

