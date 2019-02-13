import React, { Component } from 'react';
import './DayDetails.css';

class DayDetails extends Component {

  render() {
    // let { id } = this.props.day;
    let style = {
      visibility: this.props.visibility,
    }
    let props = JSON.stringify(this.props);
    return (
      <div className="day-details-screen" style={style}>
        <div className="day-details">
          <button onClick={(e) => this.props.closeDetails(e)}>close</button>
          {props}
        </div>
      </div>
    );
  }
}

export default DayDetails;