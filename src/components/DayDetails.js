import React, { Component } from 'react';
import './DayDetails.css';

class DayDetails extends Component {

  render() {
    return (
      <div className="day-details-screen">
        <div className="day-details">
        <button onClick={(e) => this.props.closeDetails(e)}>close</button>
        </div>
      </div>
    );
  }
}

export default DayDetails;