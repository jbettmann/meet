import React, { Component } from 'react';
import {
  ScatterChart, // imported as the container
  Scatter, // imported to draw the points
  XAxis, // imported for the horizontal axes respectively
  YAxis, // imported for the vertical axes respectively
  ZAxis,
  Legend,
  CartesianGrid, // imported to draw the rectangular coordinate system
  Tooltip //  imported to reveal information about the chart on hover
} from 'recharts';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';
import { OfflineAlert } from './Alert'; 


class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined,
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
   } if (navigator.onLine) {
     this.setState({
      offlineText: "",  
     });
   } else {
    this.setState({
      offlineText: "Your are currently offline. The data displayed might not be up-to-date.",
     });
   }
  }
   
   // else {
  //   // If offline, skip to getEvents. This function grabs from localStorage when offline.
  //   getEvents().then((events) => {
  //     if (this.mounted && !navigator.onLine) {
  //       this.setState({
  //         events: events.slice(0, this.state.numberOfEvents),
  //         locations: extractLocations(events),
  //         offlineText: "Your are currently offline. The data displayed might not be up-to-date.",
  //       });
  //     }
  //   });
  // }


  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = (numberOfEvents) => {

    this.setState(
      {
        numberOfEvents,
      },
      this.updateEvents(this.state.locations)
    );
    
  };

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
        });
      }
    });
  };

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      // split shortens location to just city name. returns and array. Then shift() array function to get first element in array, which is name of city
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  
  // updateEvents = (location) => {
  //   getEvents().then((events) => {
  //     const locationEvents = (location === 'all') ?
  //       events :
  //       events.filter((event) => event.location === location);
  //     this.setState({
  //       events: locationEvents
  //     });
  //   });
  // }
  
  render() {
  if (this.state.showWelcomeScreen === undefined && navigator.onLine) return <div className="App" />

  const { events, locations, numberOfEvents, showWelcomeScreen, offlineText } = this.state;

  return (
    <> 
      <div className="App"> 
        <OfflineAlert text={offlineText} />
        <CitySearch updateEvents={this.updateEvents} locations={locations} numberOfEvents={numberOfEvents}/>
        <NumberOfEvents numberOfEvents={numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} events={events}/>
        <ScatterChart width={800} height={250}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" type="category" name="city" />
          <YAxis dataKey="number" type="number" name="number of events" allowDecimals={false} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend verticalAlign="top" height={36} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        <EventList events={events} />   
      </div>
      <WelcomeScreen showWelcomeScreen={showWelcomeScreen} getAccessToken={() => { getAccessToken() }}/>
    </> 
  );
}
}
export default App;
