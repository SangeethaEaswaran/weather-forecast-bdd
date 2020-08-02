Feature: Five day weather forecast test
    As a user in Test
    I want to test if the five day weather forecast is displayed when I input a city name

    Background:
        Given user launches weather forecast website

    @test
    Scenario Outline: Verify if the user is displayed with 5 day weather forecast on entering valid city names
        When user inputs city as <cityName>
        Then user should be displayed with 5 day weather forecast
        Examples:
            | cityName  |
            | Perth     |
            | perth     |
            | Glasgow   |
            | Dundee    |
            | Stirling  |
            | Edinburgh |
            | Aberdeen  |

    @test
    Scenario Outline: Verify if the user is displayed with appropriate error message on entering invalid city names
        When user inputs city as <cityName>
        Then user should be displayed with error message
        Examples:
            | cityName    |
            | Per th      |
            | @Glasgow    |
            | lorem ipsum |
            | 33333       |
