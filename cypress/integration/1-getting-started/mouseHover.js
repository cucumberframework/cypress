/// <reference types="Cypress"/>

//const { get } = require("cypress/types/lodash");

describe('Automation practice', function () {

    it('popupHandeling', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('.mouse-hover-content').invoke('show');          // code to invoke the hidden elements 
        cy.contains('Top').click();                             //Code to click on the elements which are displayed after hover
        cy.url().should("include","top");                       //Code to check the URL if it contains the text as top



    })
})