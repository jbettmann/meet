Feature: Show/hide event details

Scenario: An event element is collapsed by default.
Given the main page is open
When the user is viewing all the events  
Then the events “show details” should be collapsed by default for all events 

Scenario: User can expand an event to see its details.
Given all events are displayed
When the user clicks on the “more details” button of a specific event they’re interested in
Then the user can view more information about that specific event

Scenario: User can collapse an event to hide its details.
Given events were shown to the user and they choice an event to view “more details” on
When the user clicks on the “hide details” button of that specific event
Then the information should be hidden from the user. 
