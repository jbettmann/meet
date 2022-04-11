import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: '',
    events: []
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value <= 0 || value > 32) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Please enter a number between 1 and 32',
      })
    } else {
      this.setState({
        numberOfEvents: value,
        events: this.props.events,
        errorText: ""
      });
    }
    this.props.updateNumberOfEvents(value);
  };

render () {
  const { numberOfEvents, errorText } = this.state;
  return (
    <div className='numberOfEvents'>
      <p>Number of Events</p>
      <input 
        type='number'
        className='inputNumberOfEvents'
        onChange={this.handleInputChanged}
        value={numberOfEvents}
      />
      <ErrorAlert text={errorText} />
    </div>
  )
}
}

export default NumberOfEvents;