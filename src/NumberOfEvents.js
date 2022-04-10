import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: '',
    events: []
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value <= 0 || value > 100) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Please enter a number between 1 and 100',
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
      <div className='numberOfEventsAlert'>
        <p>{errorText}</p>
      </div>
      <p>Number of Events</p>
      <input 
        type='number'
        className='inputNumberOfEvents'
        onChange={this.handleInputChanged}
        value={numberOfEvents}
      />
    </div>
  )
}
}

export default NumberOfEvents;