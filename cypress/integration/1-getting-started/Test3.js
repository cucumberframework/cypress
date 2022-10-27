/// <reference types="Cypress"/>
describe('Automation practice', function () {

    it('My third test case practice for automation', function (){
 // code to check and uncheck the checkboxes---------------------------------->>>>>>>>>>>>>>>>>>
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');

    cy.get('input#checkBoxOption1').uncheck().should("not.be.checked");
    cy.get("input[type='checkbox']").check(['option1', 'option2', 'option3']);
    cy.get("input[type='checkbox']").uncheck(['option1', 'option2', 'option3']);

    //<<<<<<<<<<<<<<<<<<<<<<-----------------------------Handling checkbox code ends here 

    //Code to handle static dropdown ------------------->>>
    cy.get('select').select("Option2").should('have.value', 'option2');

    //handling dynamic dropdowns ----------------> 

    cy.get("input#autocomplete").type("ind"); 
    cy.get(".ui-menu-item-wrapper").each(($e1,index,$list) => {
        if($e1.text() === 'India'){
           cy.wrap($e1).click();
        }

    })

})

})
