Feature: User Authentication tests

    Background: 
        Given user is on the app login page
        And user clicks on the login link

    @smoke @reg
    Scenario: User enters invalid credentials
        And user enters the username "ortoni11"
        And user enters the password "Pass1234"
        When clicks on the login button
        Then user is successfully logged in
        
    @smoke @reg
    Scenario: User enters invalid credentials
        And user enters the username "koushik"
        And user enters the password "Passkoushik"
        When clicks on the login button
        Then user is not logged in