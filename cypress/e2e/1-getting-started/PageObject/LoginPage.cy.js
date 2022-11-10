class LoginPage{


getEmail(){

    return cy.get("input[name='email']");
}

getpassword(){
    return cy.get("input[name='password']")

}

getClickButton(){

    return cy.contains("Login");

}


}

export default LoginPage;