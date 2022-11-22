/// <reference types="Cypress"/>
///  <reference types="cypress-iframe" />

import 'cypress-iframe'
import SOHomePage from '../1-getting-started/PageObject/SOHomePage.cy'
//import SPHomePage from '../1-getting-started/PageObject/SOHomePage.cy'

describe('Search Contact from SO', function () {
    
})

    it('Iframe hendeling', function () {
        const homepage=new SOHomePage(); 
        cy.fixture('SOLoginTestData').then(function(login){
            this.login=login;
       
        cy.LoginIntoSmartoffice(this.login.url,this.login.officeName,this.login.userName,this.login.password);
        cy.wait(5000);
        homepage.getSearchTextField().type('Rawat'); 
        homepage.getSearchIcon().click();

    })

})
