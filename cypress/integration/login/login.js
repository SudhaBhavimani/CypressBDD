import { expect } from "chai";
import {Given , Then , And , When } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')


Given('Visit url', ()=>{
    cy.visit('https://demoblaze.com/index.html') 
})

When('Enter user name {string}',(username)=>{
    cy.get('#login2').click()
    cy.wait(500)
     
    loginPage.setUserName(username)
    cy.wait(500)
})

And('Enter password {string}',(password)=>{
    loginPage.setPassword(password)
    cy.wait(500)
})

Then('Click on login',()=>{
    loginPage.clickLogin()
    //cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force: true})
    cy.url().should('contains', '/index.html')

})

Then('User gets pop up message',()=>{

    cy.on('window:alert',(text)=>{
        expect(text).to.contains('Wrong password.')
    })
})