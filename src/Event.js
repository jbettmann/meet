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
    const { events } = this.props;
    return (
      <div className='event'>
        <div className='start-date'>{events.start}</div>
        <div className='location'>{events.location}</div>
        <div className='event-link'>{events.htmlLink}</div>
        <div className='description'>{events.description}</div>
        <button className='details-button'
        onClick={this.handleDetailButton}>Show Details</button>
      </div>
    );
  }
}

export default Event;