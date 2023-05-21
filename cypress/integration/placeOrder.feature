Feature: Add item to cart feature

Background: Common steps 
Given Visit url
When Enter user name "testconsumer101"
And Enter password "Abc1234"
Then Click on login

Scenario: Add 1 item to cart
When Select product 
Then Click on Add to cart button
Then User get pop up message "Product added."

Scenario: Place order
When Select product 
Then Click on Add to cart button
Then User get pop up message "Product added."
Then Click on cart
Then Click on place order button
And Add customer details 
Then Click on Purchase







