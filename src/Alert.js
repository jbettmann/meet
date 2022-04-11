import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.className = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      fontStyle: 'italic',
      fontSize: '12px'
    };
  }
  render() {
    return (
      <div className={this.className}>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

// subclass of Alert
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
    this.className ='InfoAlert';
  }
}

// subclass of Alert
class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.className ='ErrorAlert'
  }
}

export { InfoAlert, ErrorAlert };
