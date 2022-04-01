# meet app

## Description

This is a Career Foundry project to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Key Features: [(see breakdown in User Story and Scenarios)](https://github.com/jbettmann/meet#user-stories-and-scenarios)

- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.

## Technical Requirements:

This project must meet all the following requirements to be approved and considered complete:

- Must be a React application.
- Built using the TDD technique.
- Use the Google Calendar API and OAuth2 authentication flow.
- App must use serverless functions (AWS lambda) for the authorization server instead of using a traditional server.
- Must work on ALL latest versions of browsers
- Display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
- Must pass Lighthouse’s PWA checklist.
- App works offline or in slow network conditions with the help of a service worker.
- Users may be able to install the app on desktop and add the app to their home screen on mobile.
- API call use React axios and async/await.
- Implements an alert system using an OOP approach to show information to the user.
- Makes use of data visualization (recharts preferred).
- App must be covered by tests with a coverage rate >= 90%.
- Monitored using an online monitoring tool.

## User Stories and Scenarios

### Feature 1: Filter Events by City

#### User Story:

As a user
I should be able to filter events by city
so that I can see which events are happening in that city

#### Scenarios:

**Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.** <br/>
Given user hasn’t search for any city<br/>
When the user opens the app
Then the user should see a list of all upcoming events

**Scenario 2: User should see a list of suggestions when they search for a city.:**
Given the main page is open
When user starts typing in the city textbook
Then the user should see a list of cites (suggestions) that match why they’ve typed

**Scenario 3: User can select a city from the suggested list:**
Given the user was typing “Denver” in the city textbook and the list of suggested cites is showing
When the user selects a city (Denver) from the list
Then their city should be changed to that city (Denver) and the user should receive a list of upcoming events in that city.

### Feature 2: Show/Hide an Event's Details

#### User Story:

As a user
I should be able to see/hide a events details
So that I can see the details of that given event

#### Scenarios:

**Scenario 1: An event element is collapsed by default:**
Given the user had chosen a city
When the user is viewing all the events from that city
Then the events “show details” should be collapsed by default for all events

**Scenario 2: User can expand an event to see its details:**
Given all event for that city where displayed
When the user clicks on the “more details” button of a specific event they’re interested in
Then the user can view more information about that specific event

**Scenario 3: User can collapse an event to hide its details:**
Given events were shown to the user and they choice an event to view “more details” on
When the user clicks on the “hide details” button of that specific event
Then the information should be hidden from the user.

### Feature 3: Specify the Number of Events

#### User Story:

As a user
I should be able to see the number of events
So that I can see how many event are happening in that city

#### Scenarios:

**Scenario 1: When user hasn’t specified a number, 32 is the default number:**
Given the user didn’t specify the number of event to view
When they select a city
Then the default number of events should be 32

**Scenario 2: User can change the number of events they want to see:**
Given the user had selected a city
When they specify the number of events they want to view
Then the number of events specified to see is the number events displayed.

### Feature 4: Use App when Offline

#### User Story:

As a user
I should be able to use the app offline
So that I can use it at anytime.

#### Scenarios:

**Scenario 1: Show cached data when there’s no internet connection:**
Given there is no Internet connection
When user is using the app
Then only show cached data

**Scenario 2: Show error when user changes the settings (city, time range):**
Given there is no interest connection
When the user changes the settings of search (city, time range)
Then show an error informing them they are offline.

### Feature 5: Display Chart of the Number of Upcoming Events by City

#### User Story:

As a user
I should be able to see a chart showing the number of upcoming events by city
So that I can see which city have the most events happening.

#### Scenario:

**Scenario 1: Show a chart with the number of upcoming events in each city:**
Given the user didn’t select a specific city and was looking for upcoming event
When they select “View all events”
Then they can see a chart with all the event in each city.

### Feature 6: App Shortcut to User's Home Screen

#### User Story:

As a user
I should be able to have a shortcut to home screen
So that it only takes me one click to get back to home screen

**_No Scenario for this due to feature not testable. This feature is handled by the OS._**
