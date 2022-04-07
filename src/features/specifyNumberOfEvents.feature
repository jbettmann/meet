Feature: Specify the number of events

Scenario: When user hasn’t specified a number, 32 is the default number.
Given the user didn’t specify the number of event to view
When all events are displayed
Then the default number of events should be 32 

Scenario: User can change the number of events they want to see.
Given the user is on main page 
When they specify the number of events they want to view
Then the number of events specified to see is the number events displayed. 
