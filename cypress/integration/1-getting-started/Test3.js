/// <reference types="Cypress"/>
describe('Automation practice', function () {

    it('My third test case practice for automation', function () {
        // code to check and uncheck the checkboxes---------------------------------->>>>>>>>>>>>>>>>>>
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        /* below code is to handle the checkbox functionality i.e to check and uncheck the checkboxes 

        cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
            cy.get('input#checkBoxOption1').uncheck().should("not.be.checked");
            cy.get("input[type='checkbox']").check(['option1', 'option2', 'option3']);
            cy.get("input[type='checkbox']").uncheck(['option1', 'option2', 'option3']); */

        /* This block is alternate method to check and uncheck hte checkboxes  */
        cy.get("input[type='checkbox'").each(($e1, index, $list) => {
            cy.wrap($e1).click();
        })

        //<<<<<<<<<<<<<<<<<<<<<<-----------------------------Handling checkbox code ends here 

        //Code to handle static dropdown ------------------->>>
        cy.get('select').select("Option2").should('have.value', 'option2');

        //handling dynamic dropdowns ----------------> 

        cy.get("input#autocomplete").type("ind");
        cy.get(".ui-menu-item-wrapper").each(($e1, index, $list) => {
            if ($e1.text() === 'India') {
                cy.wrap($e1).click();
                cy.get("#autocomplete").should("have.value", "India");
            }
        })
        cy.get("#displayed-text").should("be.visible");
        cy.get("#hide-textbox").click();
        cy.get("#displayed-text").should("not.be.visible");
        cy.get("#show-textbox").click();
        cy.get("#displayed-text").should("be.visible");

        /* Method 1-->Below is the code to check and uncheck the redio buttons  
        cy.get(".radioButton").each(($e1, index, $list) => {
            cy.wrap($e1).click(); 
        })*/
        /* Method 2 -- > To checck and uncheck the radio buttons  */
        cy.get("input[value='radio2']").check().should("be.checked");
    })
})
