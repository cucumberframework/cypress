class HomePage{

getContactsIcon(){ 
    return cy.get("i[class='users icon']");
}

getCreateContactButton(){ 

    return cy.get("a[href='/contacts/new']"); 
}

getSettingsButton(){ 
    cy.pause();
    return cy.get(".settings icon");
}

getLogOutButton(){ 
    return cy.contains("Log Out");
}

getSearchField(){ 
    return cy.get("input[placeholder='Search']"); 
    
}
}
export default HomePage; 