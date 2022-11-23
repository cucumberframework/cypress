/// <reference types="Cypress"/>
///  <reference types="cypress-iframe" />

import 'cypress-iframe'
import SOHomePage from '../1-getting-started/PageObject/SOHomePage.cy'
import createContactPopupElements from './PageObject/createContactPopupElements.cy';
//import SPHomePage from '../1-getting-started/PageObject/SOHomePage.cy'

describe('Search Contact from SO', function () {

})

it('Iframe hendeling', function () {
    const homepage = new SOHomePage();
    const createContactPopup=new createContactPopupElements();
    cy.fixture('SOLoginTestData').then(function (login) {
        this.login = login;

        cy.LoginIntoSmartoffice(this.login.url, this.login.officeName, this.login.userName, this.login.password);
        cy.wait(5000);
        //homepage.getSearchTextField().type('Rawat'); 
        // homepage.getSearchIcon().click();
        // cy.wait(5000);
        //homepage.getAddButtonFromContactList().click();


        homepage.getAddButton().click();
        cy.wait(3000)
        homepage.getAddContactOption().click();
        cy.wait(10000)

        const element = cy.loadFramesofPopup()
        element.type("Ackerman")

        // homepage.getAdvanceSearch().click();


    })

})
