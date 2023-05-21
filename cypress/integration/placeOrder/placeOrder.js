import { expect } from "chai";
import {Given , Then , And , When } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pages/loginPage')
const placeOrderPage = require('../../pages/placeOrderPage')

var yearValue = 2023;
var monthValue = 'May'
const cardValue = '4111111111111111'
var name = 'Sudharani'
var ConfirMsg ='Thank you for your purchase!'

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

When('Select product',()=>{
    cy.wait(500)
    placeOrderPage.selectProduct()

})

Then('Click on Add to cart button',()=>{
    cy.wait(500)
    placeOrderPage.addProductToCart()
})

Then('User get pop up message {string}', (msg)=>{
    cy.on('window:alert',(text)=>{
        expect(text).to.contains(msg)
    })
})

Then('Click on cart',()=>{
    cy.wait(500)
   placeOrderPage.clickOnCartBtn()
})

Then('Click on place order button',() => {
    cy.wait(500)
   placeOrderPage.clickOnPlaceOrder()

})

And('Add customer details',()=>{
    
   cy.wait(500)
   cy.get('#name').type(name)
     .should('be.visible')
     
   cy.wait(500)
   cy.get('#country').type('AU')
     .should('be.visible')
   
   cy.get('#city').type('Sydney')
    .should('be.visible')
   
   cy.wait(500)
   cy.get('#card').type(cardValue)
     .should('have.value',cardValue.substring(0,16))
       
   cy.get('#month').type(monthValue)
     .should('be.visible')
   
   cy.wait(500)
   cy.get('#year').type(yearValue)
   cy.wait(500)
   cy.wrap(yearValue).should('be.greaterThan',2022)
      
     
    

})

Then('Click on Purchase',()=>{
placeOrderPage.purchase()
cy.get('.sweet-alert > h2').should('contain',ConfirMsg)
cy.get('.confirm').click()     
})






