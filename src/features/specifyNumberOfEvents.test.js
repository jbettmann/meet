import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import App from '../App';
import { mockData } from '../mockData';
import NumberOfEvents from '../NumberOfEvents';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    
    given('the user didn’t specify the number of event to view', async () => {
      AppWrapper = await mount(<App />)
    });

    when('all events are displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('the default number of events should be 32', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    given('the user is on main page', async () => {
      AppWrapper = await mount(<App />)
    });

    when('they specify the number of events they want to view', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.find('.inputNumberOfEvents').simulate('change', {target: {value: 1 } });
    });

    then('the number of events specified to see is the number events displayed.', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(1);
    });
});

});