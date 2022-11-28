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
    const createContactPopup = new createContactPopupElements();
    cy.fixture('SOLoginTestData').then(function (login) {
        this.login = login;
        cy.fixture('objectRepo').then(function (elementRepo) {
            this.elementRepo = elementRepo;
            cy.fixture("createNewContact").then(function(newcontact){
                this.newcontact=newcontact;
            
       
        cy.LoginIntoSmartoffice(this.login.url, this.login.officeName, this.login.userName, this.login.password);
        cy.waitForTime(10);
        homepage.getAddButton().click();
        cy.waitForTime(3);
        homepage.getAddContactOption().click();
       cy.waitForTime(10);

        const lName = cy.loadFramesofPopup(this.elementRepo.lastName);
        lName.type(this.newcontact.lastname);
        const fName = cy.loadFramesofPopup(this.elementRepo.firstName);
        fName.type(this.newcontact.firstname);
        const suffix = cy.loadFramesofPopup(this.elementRepo.suffix);
        suffix.type(this.newcontact.suffix);
        const streetLine1 = cy.loadFramesofPopup(this.elementRepo.streetLine1);
        streetLine1.type(this.newcontact.streetline1)
        cy.loadFramesofPopup(this.elementRepo.saveButton).click()
        


        
    })

})
})
})