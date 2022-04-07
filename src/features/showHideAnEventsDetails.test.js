import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mockData';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  let AppWrapper;
  
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the main page is open',  () => {
      AppWrapper = mount(<App />);
    });

    when('the user is viewing all the events', () => {

    });

    then('the events “show details” should be collapsed by default for all events', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(0);
    });
  });


  test('User can expand an event to see its details.',  ({ given, when, then }) => {

    given('all events are displayed', async () => {
      AppWrapper = await mount(<App />);
      
    });
    
    when('the user clicks on the “more details” button of a specific event they’re interested in', () => {
      AppWrapper.update();
      AppWrapper.find('.details-btn').at(0).simulate('click');
    });

    then('the user can view more information about that specific event', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {

    given('events were shown to the user and they choice an event to view “more details” on', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.details-btn').at(0).simulate('click');
      expect(AppWrapper.find('.extra-details')).toHaveLength(1);
    });

    when('the user clicks on the “hide details” button of that specific event', () => {
      AppWrapper.find('.details-btn').at(0).simulate('click');
    });

    then('the information should be hidden from the user.', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(0);
    });
  }); 

});