import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mockData';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event events={mockData} />);
  })

  test('render an event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render a location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('render a start date', () => {
    expect(EventWrapper.find('.start-date')).toHaveLength(1);
  });

  test('render link to event', () => {
    expect(EventWrapper.find('.event-link')).toHaveLength(1);
  });

  test('render description about event', () => {
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

  test('render details are collapsed by default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('render details button', () => {
    expect(EventWrapper.find('.details-button')).toHaveLength(1);
  });

  test('render details when show details button is clicked', () => {
    EventWrapper.setState({ collapsed: true });
    EventWrapper.find('.details-button').simulate('click')
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('hide details when button is clicked again', () => {
    EventWrapper.setState({ collapsed: false });
    EventWrapper.find('.details-button').simulate('click')
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
  
});