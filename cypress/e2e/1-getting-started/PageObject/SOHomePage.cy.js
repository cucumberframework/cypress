class SOHomePage{

    getSearchTextField(){ 
        return cy.get('#search_value');
    }
    getSearchIcon(){
        return cy.get('.icon-search');
    }

    getAdvanceSearch(){
        return cy.get('#searchAdvanced');
    }

    getAddButton(){
        return cy.get('#addNewElem1 > .dropdown-toggle');
    }
    getAddContactOption(){ 
        return cy.get('#addNewOption1 > :nth-child(1) > #idSearchPeopleContact');
    }
    getAddButtonFromContactList(){
        return cy.get('#add')
    }
}
export default SOHomePage