import React, { Component } from 'react';

class Event extends Component {

  state = {
    events: {},
    collapsed: true, 
  }

  handleDetailButton = (event) => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { event } = this.props;
    
    return (
      <div className='event'>
        <p className='name'>{event.summary}</p>
        <p className='start-date'>{event.start.dateTime} {event.start.timeZone}</p>
        <p className='location'>{event.location}</p>
        <p className='description'>{event.description}</p>
        <button className='details-btn'
        onClick={this.handleDetailButton}>Show Details</button>
      </div>
    );
  }
}

export default Event;