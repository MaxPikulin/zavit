import React, { Component } from 'react';
import './DayThumb.css';

class DayThumb extends React.PureComponent {
  render() {
    let { day, handleFlip } = this.props;
    
    return (
      <div className={'dayThumb ' + this.props.day.classList} id={day.num} onClick={(e) => handleFlip(e)}>
        {day.date}
      </div>
    );
  }
}

export default DayThumb;