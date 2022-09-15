describe('My checkbox check test case',function(){
    it('Checkbox check',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click(); 
       

        cy.on('window:alert',(str)=>
        
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.get('#confirmbtn').click();
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr','target').click(); 
        cy.go('back');
        cy.go('forward')


        
 
    })
})  