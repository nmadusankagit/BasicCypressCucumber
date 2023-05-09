Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the aggregator login page
    Scenario: Success Login
        When A user enters the username "stay", the password "adm1n@Stso2", and clicks on the login button
        Then the url will contains the hub search
    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password    |
            | stay2    | adm1n@Stso2 |
        Then The error message "Please provide valid username and password." is displayed
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password     |
            | stay     | adm1n@Stso22 |
        Then The error message "Please provide valid username and password." is displayed