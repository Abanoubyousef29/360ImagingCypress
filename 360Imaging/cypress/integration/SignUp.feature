Feature: Sign Up

    I want to test the sign up features

    @run
    Scenario: Sign Up Successfully
        Given User Can Visit Website
        When User Can Click on "login" Button
        When User Enter Random Email To "email_create" with firstname "abanoub1"
        When User Can Click on "icon-user" Button
        When User Fill The TextBox "customer_firstname" With "FName"
        When User Fill The TextBox "customer_lastname" With "LName"
        When User Fill The TextBox "passwd" With "1293826"
        When User Fill The TextBox "address1" With "126 main street"
        When User Fill The TextBox "city" With "city"
        When User Select "Alabama" from dropdown menu "id_state"
        When User Fill The TextBox "postcode" With "27451"
        When User Fill The TextBox "phone_mobile" With "0239412653"
        When User Click on Register button
        Then New Page Open With Tittle "My account"
        Then User Can Log Out
        
        

    @run
    Scenario: Sign Up Failled With Missing Required Data
        Given User Can Visit Website
        When User Can Click on "login" Button
        When User Enter Random Email To "email_create" with firstname "abanoub2"
        When User Can Click on "icon-user" Button
        When User Click on Register button
        Then New Page Open With error Tittle "errors"
        

