import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

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