Feature: Daily Forecast summary Feature
    As a user
    I should be able to see detailed summary forecast details when I input a city name and select a day

    @test
    Scenario: Verify if the user is displayed with detailed summary of three hourly forecast for a day
        Given user launches weather forecast website
        When user inputs city as Glasgow
        Then user should be displayed with below summary details
            | dayName          | Fri   |
            | currentCondition | cloud |
            | maxTemp          | 13    |
            | minTemp          | 9     |
            | currentWindSpeed | 6     |
            | rainfall         | 4     |
            | pressure         | 1008  |

    @test
    Scenario: Verify if the user is displayed with detailed summary of three hourly forecast for a day
        Given user launches weather forecast website
        When user inputs city as Perth
        Then user should be displayed with below summary details
            | dayName          | Sat  |
            | currentCondition | rain |
            | maxTemp          | 13   |
            | minTemp          | 11   |
            | currentWindSpeed | 9    |
            | rainfall         | 31   |
            | pressure         | 994  |
