import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value
    });
  }

render () {
  return (
    <div className='numberOfEvents'>
      <input 
      type='number'
      className='inputNumberOfEvents'
      onChange={this.handleInputChanged}
      value={this.state.numberOfEvents}
      />
    </div>
  )
}
}

export default NumberOfEvents;