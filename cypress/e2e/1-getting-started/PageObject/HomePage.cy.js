class HomePage{

getContactsIcon(){ 
    return cy.get("i[class='users icon']");
}

getCreateContactButton(){ 

    return cy.get("a[href='/contacts/new']"); 
}

}
export default HomePage; 