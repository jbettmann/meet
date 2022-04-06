import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData }from '../mockData';
import { extractLocations, getEvents } from '../api'; 

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    // call shallow on App component to then use in test as AppWrapper
    AppWrapper = shallow(<App />)
  }); 

  // test description to accurately describe test
  test('render list of events', () => {
    // runs search on EventList within AppWrapper to see how many EventList components there are. Should be (1) aka. Make sure it EXISTS!
    expect(AppWrapper.find(EventList)).toHaveLength(1); 
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});


// Integration test, separate from unit test.
describe('<App /> integration', () => {

  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventState = AppWrapper.state('events');
    //  IMPORTANT!! Test needs to happen to ensure props is defined!!
    expect(AppEventState).not.toEqual(undefined);
    // Test compares state of App's events with EventList's event props to ensure passed correctly. 
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventState);
    // Cleans up DOM after components have been mounted. 
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    //  IMPORTANT!! Test needs to happen to ensure props is defined!!
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  //  always add async if callback has async code. 
  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    // sets CitySearch's suggestions state to have all available cities
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    // holds index of selected suggestion because will evaluate to integer ranging from 0 to -1 
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    // handleItemClicked() is method in CitySearch. instance() allows you to call function from component directly
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });
});