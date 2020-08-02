Feature: Three hour weather forecast Feature
    As a user
    I should be able to see three hourly weather forecast when I select a day

    Background:
        Given user launches weather forecast website

    @test
    Scenario Outline: Verify if the user is displayed with three hour weather forecast for a day
        When user inputs city as Perth
        And user selects <dayName> day
        And three hourly weather forecast for <dayName> should be displayed
        Examples:
            | dayName |
            | Wed     |
            | Sat     |

    @test
    Scenario: Verify if three hour weather forecast for a day is hidden when the user selects another/same day
        And user inputs city as Dundee
        And user selects Tue day
        And three hourly weather forecast for Tue should be displayed
        When user selects Tue day
        And three hourly weather forecast for Tue should not be displayed
        When user selects Sat day
        And three hourly weather forecast for Tue should not be displayed
        Then three hourly weather forecast for Sat should be displayed
