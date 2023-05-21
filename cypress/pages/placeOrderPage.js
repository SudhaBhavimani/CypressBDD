class placeOrderPage{
    elements = {
        selProd:() => cy.contains('Nexus 6'),
        addCartBtn:() => cy.contains('Add to cart'),
        cartBtn:() => cy.contains('Cart'),
        placeOrderBtn:() => cy.contains('Place Order'),
        clickOnPurchase:() => cy.contains('Purchase')
         
    }

    selectProduct()
    {
        cy.wait(500)
      this.elements.selProd().click();
    }

    addProductToCart()
    {
        this.elements.addCartBtn().click();
    }
     
    clickOnCartBtn()
    {
        this.elements.cartBtn().click();
    }

    clickOnPlaceOrder()
    {
        this.elements.placeOrderBtn().click();
    }

    purchase()
    {
        this.elements.clickOnPurchase().click()
    }
        
    }

module.exports = new placeOrderPage();