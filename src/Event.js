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
    const { collapsed } = this.state;
    return (
    <div className="event">
      <h2 className="summary">{event.summary}</h2>
      <p className="start-date">
        {event.start.dateTime} ({event.start.timeZone})
      </p>

      <p className="location">
        {event.location}
      </p>

      <button
        variant="outline-info"
        className={`details-btn ${collapsed ? "show" : "hide"}-details`}
        onClick={this.handleDetailButton}
      >
        {collapsed ? "Show Details" : "Hide Details"}
      </button>

      {!collapsed && (
        <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
          <h3 className="about-event">About the event:</h3>
          <p className="event-description">{event.description}</p>
          <a href={event.htmlLink} rel="noreferrer" target="_blank">
            See details on Google Calendar
          </a>
        </div>
        )}
    </div>
    );
  }
}

export default Event;