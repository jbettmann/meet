import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = { 
    query: '',
    suggestions: [],
    numberOfEvents: '',
    showSuggestions: undefined
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({showSuggestions:true});
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We were unable to find that city. Please try another city',
        showSuggestions: false,
      });
    } else {
      this.setState({ 
        query: value,
        suggestions,
        infoText: '',
        numberOfEvents: this.props.numberOfEvents
      });
    }
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestion: [],
      showSuggestions: false,
      infoText: ''
    });
    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <div className="CitySearch">
        <p>Search by Cities</p>
        <input
          type="text"
          className="city"
          value={this.state.query}
          placeholder="Enter City"
          onChange={this.handleInputChange}
          // onFocus={() => { this.setState({ showSuggestions: true }) }}
        />
        <div>
          <InfoAlert text={this.state.infoText} />
        </div>
        <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li 
            key={suggestion}
            onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;