class Login
{
getEmail()
{
    return cy.get("#user_email2") 
}

getPassword()
{
    return cy.get('#user_password2').should('be.visible')

}

getLoginBtn()
{
   return cy.get(".uk-button")
}
loginFunction(email,password)
    {
        this.getEmail().type(email)
        this.getPassword().type(password)
        this.getLoginBtn().click()
    }
}

export default Login;
