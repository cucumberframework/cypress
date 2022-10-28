/// <reference types="Cypress"/>

//const { get } = require("cypress/types/lodash");

describe('Automation practice', function () {

    it('popupHandeling', function () {
        // code to check and uncheck the checkboxes---------------------------------->>>>>>>>>>>>>>>>>>
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get("#alertbtn").click();
        cy.get("#confirmbtn").click();
        cy.on("window:alert", (str) => {
            //Simple Alert --compare the string which we get from the alert box with the expected string 
            expect(str).to.equal("Hello , share this practice page and share your knowledge");
        })
            //Confirmation alert -- 
        cy.on("window.confirm",(str)=>{
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })
        
/* Added code to handle multiple tabs , go forward and go backward  */
        cy.get("#opentab").invoke("removeAttr","target").click();
        cy.go("back");
        cy.go("forward");

    })
})