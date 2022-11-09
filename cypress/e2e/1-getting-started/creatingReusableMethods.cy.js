/// <reference types="Cypress"/>
///  <reference types="cypress-iframe" />

import 'cypress-iframe'

//Tutorial-47
describe('Tutorial-43 to Tutorial -47--Hooks Explaination', function () {

   

    beforeEach(function () {
        /* code for fixtures- -taking data from external files  */
        cy.fixture("loginns").then(function (loginData) {
            this.loginData = loginData;
        })
        

    })

    it('loggin in into application with customised code', function () {

        cy.log("This is before function");
        cy.LoginIntoApp(this.loginData.url,this.loginData.email,this.loginData.password);

        

    })

})

