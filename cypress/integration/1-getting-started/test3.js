describe('My checkbox check test case',function(){
    it('Checkbox check',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        cy.get('input[type=checkbox]').check(['option1','option2'])
        cy.get('input[type=checkbox]').uncheck()



        //static dropdown, we can either pass the text in the dropdown or we can pass the value which is persent in the value attribute
        cy.get('select').select('Option3').should('have.value','option3')

        //select option from dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item-wrapper').each(($e1,index,$list)=>{
            if($e1.text()==='India'){
                $e1.click();
            }
        })
 
//Click on the radio buttons with cyperss
        cy.get('#autocomplete').should('have.value','India')
        cy.get('input[name=radioButton]').check(['radio1','radio2']).should('have.value','radio1')
        cy.get('input[name=radioButton]')

// check is elements are visible or NOT on the webpage
        cy.get('#displayed-text').should('be.visible').type('This element is NOT hidden')
        cy.get('#hide-textbox').should('be.visible').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').should('be.visible').click()
        cy.get('#displayed-text').should('be.visible').should('have.value');
        
//tutorial 21 popups handeling 



    })
})