
Feature: Login functionality

  @smoke @regression
  Scenario: Successful login with valid credentials

    Given user is on the login page
    When user enters username "standard_user" and password "secret_sauce"
    And user clicks on the login button
    Then user should be redirected to the products page


  @regression
  Scenario Outline: Login with invalid credentials

    Given user is on the login page
    When user enters username "<username>" and password "<password>"
    And user clicks on the login button
    Then user should see an error message

    Examples:
      | username        | password       |
      | wrong_user      | secret_sauce   |
      | standard_user   | wrong_password |
      | locked_out_user | secret_sauce   |
