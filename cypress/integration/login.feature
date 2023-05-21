Feature: Login feature

Background: Common steps
Given Visit url

Scenario: Success login
 
When Enter user name "testconsumer101"
And Enter password "Abc1234"
Then Click on login 
 
Scenario: Nagative case - Unsuccess login 
When Enter user name "testconsumer101"
And Enter password "wrong password"
Then Click on login 
Then User gets pop up message


   