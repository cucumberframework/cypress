class SOHomePage{

    getSearchTextField(){ 
        return cy.get('#search_value')
    }
    getSearchIcon(){
        return cy.get('.icon-search');
    }

}
export default SOHomePage