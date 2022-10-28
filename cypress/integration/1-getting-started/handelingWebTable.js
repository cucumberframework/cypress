/// <reference types="Cypress"/>

//const { get } = require("cypress/types/lodash");

describe('Automation practice', function () {

    it('popupHandeling', function () {
        // code to check and uncheck the checkboxes---------------------------------->>>>>>>>>>>>>>>>>>
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get("tr td:nth-child(2)").each(($e1,index,$list)=>{
            cy.log($e1.text());
        const text=$e1.text(); 
        if(text.includes("JMETER")){
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
               const finalPrice= price.text();
               cy.log(finalPrice);
               expect(finalPrice).to.equal("25");

            })
            

            }
        })
        
        
    })
})
