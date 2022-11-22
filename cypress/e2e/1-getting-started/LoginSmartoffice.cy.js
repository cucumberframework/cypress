/// <reference types="Cypress"/>
///  <reference types="cypress-iframe" />

import 'cypress-iframe'

//Tutorial-40 
describe('IFrame practice', function () {
})

    it('Iframe hendeling', function () {
        cy.fixture('SOLoginTestData').then(function(login){
            this.login=login;
       
        cy.LoginIntoSmartoffice(this.login.url,this.login.officeName,this.login.userName,this.login.password);
        
    })

})
