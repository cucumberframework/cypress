/// <reference types="Cypress"/>
///  <reference types="cypress-iframe" />

import 'cypress-iframe'

//Tutorial-40 
describe('IFrame practice', function () {

    it('Iframe hendeling', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded("#courses-iframe");                              //used to load all the frames with the id mentioned 
        cy.iframe().find("a[href='practice-project']").eq(0).click();         //swith to the frame find the particular element and then click on the element 
    })

})
