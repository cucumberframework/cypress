/// <reference types="Cypress"/>

//const { get } = require("cypress/types/lodash");
//Tutorial-38
describe('Automation practice', function () {

    it('popupHandeling', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('.mouse-hover-content').invoke('show');          // code to invoke the hidden elements 
        cy.contains('Top').click();                             //Code to click on the elements which are displayed after hover
        cy.url().should("include","top");                       //Code to check the URL if it contains the text as top


        /* clicking on hidden elements forcablly without hovering on the element  */

            cy.contains("Reload").click({force:true});
            cy.url().should("include","rahulshettyacademy.com/AutomationPractice/");



    })
})