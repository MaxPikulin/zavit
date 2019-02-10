import React, { Component } from 'react';
import './DayContainer.css';
import DayThumb from './DayThumb';

class DayContainer extends Component {

  render() {
    let days = this.props.days;
    let dayByMonth = '';
    if (days) {
      dayByMonth = days.map(day => {
        return <DayThumb key={day.dayNum} day={day} handleFlip={this.props.handleFlip}/>;
      })
    }
    return (
      <div className='dayContainer'>
        {dayByMonth}
      </div>
    );
  }
}

export default DayContainer;