class ContactDetails{ 

getFirstName(){
    return cy.get("input[name='first_name']");
}

getLastName(){ 
    return cy.get("input[name='last_name']")
}

getMiddleName(){ 
    return cy.get("input[name='middle_name']")
}

getCompanyName(){ 
    return cy.get("div[name='company']")
}

getSaveButton(){
    return cy.contains("Save");
}

}
export default ContactDetails