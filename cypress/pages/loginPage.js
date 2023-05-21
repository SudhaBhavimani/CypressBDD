class loginPage{


    elements = {
        txtUser:() => cy.get('#loginusername'),
        txtPsw:() => cy.get('#loginpassword'),
        clickBtn:() => cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    setUserName(username){

        this.elements.txtUser().type(username);
        
    }

    setPassword(password){
        this.elements.txtPsw().type(password);
    }

    clickLogin(){
        this.elements.clickBtn().click();
    }

    
    
}

module.exports = new loginPage();