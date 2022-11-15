/// <reference types="Cypress"/>
///  <reference types="cypress-iframe" />

import 'cypress-iframe'
import ContactDetails from './PageObject/ContactDetails.cy';
import HomePage from './PageObject/HomePage.cy'

//Tutorial-47,Tut-48 
describe('Tutorial-43 to Tutorial -47--Hooks Explaination', function () {

    const homePage= new HomePage(); 
    const contactDetail=new ContactDetails();

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
        contactDetail.getFirstName().type(this.loginData.FirstName); 
        contactDetail.getLastName().type(this.loginData.LastName); 
        contactDetail.getMiddleName().type(this.loginData.MiddleName);
        contactDetail.getSaveButton().click();
        homePage.getSettingsButton().click(); 
        homePage.getLogOutButton().click();
        homePage.getSearchField().type('this.loginData.FirstName{enter}')

    })


    //this.loginData.password


})