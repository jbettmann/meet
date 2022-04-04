import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mockData';

describe('<EventList /> component', () => {
  test('render correct number of events', () => {
    // porps set manually with mock data '[{},{},{},{}]'
    const EventListWrapper = shallow(<EventList events={mockData} />);
    // Only passes if exactly FOUR events from its props 'events'
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
});