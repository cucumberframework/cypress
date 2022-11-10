/// <reference types="Cypress"/>
///  <reference types="cypress-iframe" />

import 'cypress-iframe'
import HomePage from './PageObject/HomePage.cy'

//Tutorial-47,Tut-48 
describe('Tutorial-43 to Tutorial -47--Hooks Explaination', function () {

    const homePage= new HomePage(); 

    beforeEach(function () {
        /* code for fixtures- -taking data from external files  */
        cy.fixture("loginns").then(function (loginData) {
            this.loginData = loginData;
        })


    })

    it('loggin in into application with customised code', function () {

        cy.log("This is before function");

        /* Code to parameterise out test cases 
        this.loginData.email.forEach(emailAddress=>{ */
        cy.LoginIntoApp(this.loginData.url, this.loginData.email, this.loginData.password);
        
        
        homePage.getContactsIcon().click();
        homePage.getCreateContactButton().click();
    })


    //this.loginData.password


})