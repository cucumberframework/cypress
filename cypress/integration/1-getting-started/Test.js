/// <reference types="Cypress"/>

describe('My First suite',function(){

//     it('My first test case',function(){

// cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
// cy.get(".search-keyword").type("ca")
// //cy.get('.product-image :visible').should('have.length',4)
// //cy.get('.products:visible').find('.product:visible').should('have.length',4)
// cy.wait(2000)
// //cy.get('.products:visible').find('.product:visible').eq(1).contains('ADD TO CART').click()  

// //proble with below is that we need to provide the hardcoded index in order to locate which is NOT possible
// //cy.get('.products').find('.product').eq(2).find('button[type=button]').click()

// //for this we will iterate over the array and find element based on the name of of the product then we will click on the add to cart
// cy.get('.products').find('.product').each(($e1,index,$list)=>{

//     const textVegetable=$e1.find('.product-name').text() 
// if(textVegetable.includes('Cashews')){
//     cy.wrap($e1).find('button[type=button]').click()
// }

// })

//     })
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

    

})


})