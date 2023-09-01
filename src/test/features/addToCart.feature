Feature: Add products to cart

    Background:
        Given user is on the app login page
        And user clicks on the login link

    Scenario Outline: Authenticated Users - Add to cart
        And user enters the username "<username>"
        And user enters the password "<password>"
        And clicks on the login button
        When user searches for "<book>"
        And user adds the book to the cart
        Then the cart badge gets updated

        Examples:
            | username | password  | book            |
            | ortoni   | pass1234$ | Roomies         |
            | ortonikc | pass1234  | The Simple Wild |

    @fail
    Scenario: UnAuthenticated User - Add to cart
        When user searches for "All of Us with Wings"
        And user adds the book to the cart
        Then the cart badge gets updated

