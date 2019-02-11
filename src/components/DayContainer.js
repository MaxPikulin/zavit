import React, { Component } from 'react';
import './DayContainer.css';
import DayThumb from './DayThumb';

class DayContainer extends React.PureComponent {

  render() {
    let days = this.props.days;
    console.log(days);
    let dayByMonth = '';
    if (days) {
      dayByMonth = days.map(day => {
        return <DayThumb key={day.num} day={day} handleFlip={this.props.handleFlip}/>;
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