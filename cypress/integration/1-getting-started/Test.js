/// <reference types="Cypress"/>

describe('My First suite',function(){

it('My first test case',function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("Ca");
    cy.wait(2000);
    cy.get(".products:visible").find(".product:visible").each(($e1,index,$List)=>{
        const textElement=$e1.find(".product-name").text(); 
        if(textElement.includes("Carrot")){
            cy.wrap($e1).find("button[type=button]").click(); 
        }

    })
//if we want to handle promise for the variables which you dont want to code as per cypress standard, we need to handle promise with below line of code
cy.get(".quantity").as('productQuantity');
cy.get('@productQuantity').then(function(quantityElement){
cy.log(quantityElement.text());
})
    
    

})


})